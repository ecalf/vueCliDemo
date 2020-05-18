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
            <p>联系人：张女士</p>
            <p>电话：0755-8888 888</p>
            <p>地址：深圳市福田区天安国际大厦6楼405号</p>
        </div>
    </el-dialog>
</template>



<script>
    export default {
        props:{
            visible:Boolean
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