<template>
    <!--立即联系-->
    <el-dialog 
        title="立即联系" 
        width="400px"
        v-bind:visible="visible" 
        v-bind:append-to-body="true"
        @close="closeDialog()"
        >

        <div class="company-msg">
            <p>联系人：{{info.contact_name}}</p>
            <p>电话：{{info.contact_phone}}</p>
            <p>地址：{{info.addr}}</p>
        </div>
    </el-dialog>
</template>

<style lang="scss" scoped>
.company-msg {
    width:300px;
    margin:0 auto;
    font-size: 16px;
    p {
        padding-bottom: 5px;
    }
}
</style>



<script>
    export default {
        props:{
            visible:Boolean,
            info:Object
        },
        data(){
            return {
                
            }
        },
       
        methods:{
            closeDialog(){
                this.$emit('trigger',false);
            }
        }

        
    }

</script>