<template>
  <!--采购订单： 浏览者向该订单报价-->
  <el-dialog 
    class="price-box"
    title="立即报价表"
    width="600px"
    center
    v-bind:visible="visible"
    v-bind:append-to-body="true"
    @close="closeDialog()"
    
  >
    <el-form :model="form">
      <h3 class="prodetail-title form-protitle">
        鱼跃呼吸机家
        <i class="highcolor">医用</i>正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压
      </h3>
      <el-form-item label="手机号码" :label-width="formLabelWidth">
        <el-input v-model="form.tel" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名/公司名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth">
        <el-input v-model="form.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="留言" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.message" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog()">取 消</el-button>
      <el-button type="primary" @click="submit()">确 定</el-button>
    </span>
  </el-dialog>
</template>


<script>
  export default {
    props:{
        visible:Boolean
    },
    data(){
      return {
        form: {
            title: "",
            tel: "",
            name: "",
            price: "",
            message: ""
        },
        formLabelWidth: "100px"
      }
    },
    methods:{
      closeDialog(){
        this.$emit('trigger',false);
      },

      submit(){
        this.closeDialog();

      }
    }

  

  }

</script>