<template>
    <el-dialog 
        v-bind:title="title" 
        width="600px"
        v-bind:visible="visible" 
        v-bind:append-to-body="true"
        @close="closeDialog()"
        >
        <ul class="paymentList">
            <li class="paymentItem" 
                v-for="(item,index) of list" 
                v-bind:key="index"
                v-bind:data-id="item.id"
                v-bind:title="item.channel_name"
                @click="selectPaymentForm(item)"
                >
                <img class="paymentImg" v-bind:src="item.channel_logo" />
            </li>
        </ul>
    </el-dialog>    
</template>

<style lang="scss" scoped>
    .paymentList{
        display:flex;
        justify-content:center;
        align-items: center;
    }

    .paymentItem{
        position:relative;
        display:flex;
        justify-content:center;
        align-items: center;
        width:150px;
        height: 56px;;
        margin: 0 15px 20px;
        overflow: hidden;
        @include default-border;
        @include default-radius;

        .paymentImg{
            height:48px;            
        }

        .paymentName{
            position: absolute;
            bottom: 0;
            width:100%;
            height: 30px;
            font-size:14px;
            color:$fontColor;
            z-index:1;
        }
    }

</style>


<script>
    import { getPayWayList } from "@api/payment";

    export default {
        props:{
            title:String,
            visible:Boolean
        },
        data(){
            return {
                list:[]
            }
        },
        methods:{
            closeDialog(){
                this.$emit('trigger',false);
            },
            selectPaymentForm(item){
                this.$emit("on-pay",item);
                this.closeDialog();
            },
            async getPaymentMethods(){
                const res = await getPayWayList();
                if(res.code==200){
                    this.list = res.data.list;
                }else{

                }
            }
        },
        async updated(){
            if(this.list.length==0){
                await this.getPaymentMethods();
            }
        }
        
    }

</script>