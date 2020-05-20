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

        },
        data(){
            return {
                curTabId:0,
                titleTabs:{
                    name:'titleTab',
                    tabs:[
                        {id:0,text:'个人认证',active:true},
                        {id:1,text:'企业认证'},
                    ],
                    handler:(name,item)=>{
                        this.curTabId = item.id;

                        console.log('this.curTabId',name,this.curTabId);
                        console.log('fieldData',this.fieldData);
                    }
                }
            }
        },
        methods:{
            validForm(){
                const params = {};
                const fieldData = this.fieldData;
                let errMsg = '';

                for(let name in fieldData){
                    if(Object.prototype.toString.call(fieldData[name])=='[object Array]'){
                        params[name] = [].concat(fieldData[name]).join();
                    }else{
                        params[name] = fieldData[name];
                    }
                }

                //console.log('params',params);

                if(!params.company_name){
                    errMsg = '请输入公司名称';
                }else if(!params.company_introduce){
                    errMsg = '请输入公司介绍';
                }else if(!params.addr){
                    errMsg = '请输入公司地址';
                }else if(!params.contact_name){
                    errMsg = '请输入联系人';
                }else if(!params.contact_phone){
                    errMsg = '请输入联系电话';
                }else if(!params.email){
                    errMsg = '请输入邮箱';
                }else if(!params.company_logo){
                    errMsg = '请上传公司logo';
                }else if(!params.company_transparency){
                    errMsg = '请上传幻灯片图片';
                }else if(!params.company_images){
                    errMsg = '请上传公司介绍图片';
                }else if(!params.qualifications){
                    errMsg = '请上传公司资质图片';
                }else if(!validator.isTel(params.contact_phone)){
                    errMsg = '电话号码输入错误';
                }else if(!validator.isEmail(params.email)){
                    errMsg = '邮箱输入错误';
                }else if(params.qq&&!validator.isNum(params.qq)){
                    errMsg = 'QQ号码输入错误';
                }

                return {
                    state:!errMsg,
                    params:params,
                    errMsg:errMsg
                }

            },
            
            async authenticate(name,fieldData){
                console.log('on authenticate:',name,fieldData);



                return false;


                const info = this.validForm();
                if(!info.state){
                    this.$message({
                        showClose: true,
                        message: info.errMsg,
                        type: "error"
                    });

                    return false;
                }



                const params = info.params;
                const res = await authenticate({data:params});
                if(res.code==200){
                    this.$message({
                        showClose: true,
                        message: res.message,
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