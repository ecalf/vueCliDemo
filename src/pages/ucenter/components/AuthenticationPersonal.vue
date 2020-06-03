<template>
  <div class="form-panel">
    <FormRow>
      <p class="authenticate-title">个人认证</p>
    </FormRow>

    <FormRow>
      <InputField
        v-bind:required="true"
        error
        type="text"
        label="姓名"
        name="real_name"
        width="312"
        height="40"
        v-model="fieldData.real_name"
        @update-value="updateValue"
      />
    </FormRow>

    <FormRow>
      <InputField
        v-bind:required="true"
        type="text"
        label="身份证号码"
        name="idcard"
        width="312"
        height="40"
        v-model="fieldData.idcard"
        @update-value="updateValue"
      />
    </FormRow>

    <FormRow>
      <FieldWrap
        type="fileUploadGroup"
        label="证件照"
        v-bind:required="true"
        height="150"
        width="auto"
      >
        <FileUploadImage
          title="手持身份证照片"
          name="identify_card_photo"
          v-model="fieldData.hand_identify_card_photo"
          @update-value="updateValue"
        />

        <FileUploadImage
          title="身份证正面"
          name="identify_card_photo_front"
          v-model="fieldData.identify_card_photo_front"
          @update-value="updateValue"
        />

        <FileUploadImage
          title="身份证反面"
          name="identify_card_photo_back"
          v-model="fieldData.identify_card_photo_back"
          @update-value="updateValue"
        />
      </FieldWrap>
    </FormRow>

    <div class="btn-wrap">
      <Button type="button" text="保 存" @on-click="authenticate()" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.form-panel {
  margin: 0 auto;
  width: 666px;
}
.authenticate-title {
  font-size: 16px;
  font-weight: bold;
  margin-left: 115px;
  width: 600px;
}

.btn-wrap {
  margin-top: 60px;
  margin-bottom: 20px;
  text-align: center;
  width: 555px;
}
</style>

<script>
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import FileUploadImage from "@components/form/FileUploadImage";
import Button from "@components/form/Button";

import validator from "@utils/validator";

export default {
  components: {
    FormRow,
    FieldWrap,
    InputField,
    FileUploadImage,
    Button
  },
  props: {},
  data() {
    return {
      fieldData: {
        //scene认证场景 个人：identify_person 组织：identify_organization 公司：identify_company
        scene: "identify_person",
        idcard: "", //身份证
        real_name: "", //姓名
        hand_identify_card_photo: "", //手持证件照
        identify_card_photo_front: "", //身份证正面
        identify_card_photo_back: "" //身份证反面
      }
    };
  },
  methods: {
    updateValue(name, value) {
      /***********************组件已经接使用 v-model 绑定数据*******
            if((/\_\d+$/).test(name)){//数组field: xxx_0, xxx_1, xxx_2
                let nameParseInfo = name.match(/(.+)\_(\d+)$/);
                let fieldName = nameParseInfo[1];
                let index = nameParseInfo[2]*1;
                if(Object.prototype.toString.call(this.fieldData[fieldName])!='[object Array]'){
                    this.fieldData[fieldName] = [];
                }
                this.fieldData[fieldName][index] = value;

            }else{
                this.fieldData[name] = value;
            }
            *****************************************************/

    //   console.log("updateValue", name, value);
    //   console.log(this.fieldData);
    },
    validForm() {
      const params = this.fieldData;
      let errMsg = "";

      if (!params.real_name) {
        errMsg = "请输入姓名";
      } else if (!params.idcard) {
        errMsg = "请输入身份证号码";
      } else if (!validator.isIdCard(params.idcard)) {
        errMsg = "身份证号码输入错误";
      } else if (!params.hand_identify_card_photo) {
        errMsg = "请上传身份证照片";
      } else if (!params.identify_card_photo_front) {
        errMsg = "请上传身份证正面照片";
      } else if (!params.identify_card_photo_back) {
        errMsg = "请上传身份证反面照片";
      }

      return {
        state: !errMsg,
        params: params,
        errMsg: errMsg
      };
    },
    authenticate() {
      const info = this.validForm();
      if (!info.state) {
        this.$message({
          showClose: true,
          message: info.errMsg,
          type: "error"
        });
        
        return false;
      } else {
        this.$emit("on-authenticate", "personalAuthentication", this.fieldData);
      }
    }
  }
};
</script>