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
      <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="quotationForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系人" :label-width="formLabelWidth" prop="contact_name">
        <el-input v-model="quotationForm.contact_name" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="公司" :label-width="formLabelWidth" prop="company_name">
        <el-input v-model="quotationForm.company_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="单价" :label-width="formLabelWidth" prop="quoted_price">
        <el-input v-model="quotationForm.quoted_price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="留言" :label-width="formLabelWidth" prop="desc">
        <el-input type="textarea" v-model="quotationForm.desc" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog()">取 消</el-button>
      <el-button type="primary" @click="submit()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<style lang="scss" scoped>
  .form-protitle{
    font-size:16px;
    font-weight:normal;
  }

</style>


<script>
  import { quotation } from "@api/need";
  import { isTel } from "@utils/validator";

  let validaMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if(!validator.isTel(value)){
          callback(new Error("请输入正确的电话号码"));
        }else{
          callback();
        }
      }
    };

  let validatePrice = (rule, value, callback) => {
     if (value === "") {
        callback(new Error("请输入价格"));
      } else {
        if(!validator.isPrice(value+'')){
          callback(new Error("价格输入错误"));
        }else{
          callback();
        }
      }
  }


  const rules = {
      phone: [
          { required: true, validator: validaMobile, trigger: "blur" }
      ],
      contact_name:[ { required: true,trigger: "blur",message: "请输入你的姓名"}],
      quoted_price:[{ required: true,trigger: "blur",validator:validatePrice}]
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
            phone: "",
            contact_name: "",
            company_name:"",
            quoted_price: "",
            desc: ""
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
                quoted_price:this.quotationForm.quoted_price,
                desc:this.quotationForm.desc,
                phone:this.quotationForm.phone,
                contact_name:this.quotationForm.contact_name,
                company_name:this.quotationForm.company_name
              }

              const res = await quotation({data:params});
              if(res.code==200){
                  this.$message({
                    showClose: true,
                    message: '您的报价已经成功提交',
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