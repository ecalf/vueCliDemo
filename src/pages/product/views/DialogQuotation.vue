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
    <el-form :model="quotationForm" :rules="rules" ref="quotationForm">
      <h3 class="prodetail-title form-protitle">
        鱼跃呼吸机家
        <i class="highcolor">医用</i>正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压
      </h3>
      <el-form-item label="手机号码" :label-width="formLabelWidth" prop="mobile">
        <el-input v-model="quotationForm.mobile" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名/公司" :label-width="formLabelWidth" prop="contact">
        <el-input v-model="quotationForm.contact" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth" prop="price">
        <el-input v-model="quotationForm.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="留言" :label-width="formLabelWidth" prop="message">
        <el-input type="textarea" v-model="quotationForm.message" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog()">取 消</el-button>
      <el-button type="primary" @click="submit()">确 定</el-button>
    </span>
  </el-dialog>
</template>


<script>
  import { quotation } from "@api/need";

  let validaMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        let reg = /^1[3456789]\d{9}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入正确的手机号！"));
        }else{
          callback();
        }
      }
    };

  let validatePrice = (rule, value, callback) => {
     if (value === "") {
        callback(new Error("请输入价格"));
      } else {
        let reg = /^\d+(?:\.\d*)?$/;
        if(!reg.test(value+'')){
          callback(new Error("价格输入错误"));
        }else{
          callback();
        }
      }
  }


  const rules = {
      mobile: [
          { required: true, validator: validaMobile, trigger: "blur" }
      ],
      contact:[ { required: true,trigger: "blur",message: "请输入你的姓名/公司名"}],
      price:[{ required: true,trigger: "blur",validator:validatePrice}]
  }

  export default {
    props:{
        visible:Boolean,
        id:Number
    },
    data(){
      return {
        formLabelWidth: "100px",
        quotationForm: {
            mobile: "",
            contact: "",
            price: "",
            message: ""
        },
        rules:rules
      }
    },
    methods:{
      closeDialog(){
        this.$refs.quotationForm.resetFields();
        this.$emit('trigger',false);
      },

      submit(){
        this.quotation();
      },
      async quotation(){
        this.$refs.quotationForm.validate(async valid => {
          if (valid) {
              const params = {
                needs_id:this.id,
                quoted_price:this.quotationForm.price,
                desc:this.quotationForm.message,
                phone:this.quotationForm.mobile,
                contact_name:this.quotationForm.contact,
                company_name:this.quotationForm.contact
              }

              const res = await quotation({data:params});
              if(res.code==200){
                  this.$message({
                    showClose: true,
                    message: res.message,
                    type: "success"
                  });

                  this.closeDialog();
              }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
              }

          }
        });

        
      }
    }

  

  }

</script>