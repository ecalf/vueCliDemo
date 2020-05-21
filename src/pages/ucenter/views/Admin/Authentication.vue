<template>
    <MemberRightWrap title="" v-bind:tabconfig="titleTabs">
        <AuthenticationPersonal v-show="curTabId==0" @on-authenticate="authenticate" />
        <AuthenticationCompany  v-show="curTabId==1" @on-authenticate="authenticate"/>
    </MemberRightWrap>
</template>

<style lang="scss" scoped>
    

</style>

<script>
    import MemberRightWrap from "../../components/MemberRightWrap";
    import AuthenticationPersonal from "../../components/AuthenticationPersonal";
    import AuthenticationCompany from "../../components/AuthenticationCompany";
    import {authenticate} from "@api/user";

   
    export default {
        components:{
            MemberRightWrap,
            AuthenticationPersonal,
            AuthenticationCompany
        },
        props:{
            type:Number
        },
        data(){
            let curTabId = this.type>>0;
            return {
                curTabId:curTabId,
                titleTabs:{
                    name:'titleTab',
                    tabs:[
                        {id:0,text:'个人认证',active:curTabId==0},
                        {id:1,text:'企业认证',active:curTabId==1},
                    ],
                    handler:(name,item)=>{
                        this.curTabId = item.id;
                    }
                }
            }
        },
        methods:{
            async authenticate(name,params){
                console.log('on authenticate:',name,params);

                const res = await authenticate({data:params});
                if(res.code==200){
                    this.$message({
                        showClose: true,
                        message: '认证申请已成功提交',
                        type: "success"
                    });

                }else{
                    this.$message({
                        showClose: true,
                        message: res.message,
                        type: "error"
                    });
                }
            }
        }
    }
</script>