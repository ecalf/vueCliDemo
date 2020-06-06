<template>
  <MemberRightWrap title="账户信息">

    <div class="info-section user-info">
      <div class="info-title">基本信息</div>

      <FormRow>
        <TextField label="更改手机" :text="user_company.contact_phone" width="300" height="25" />
        <TextField label="邮箱" :text="user_company.email" width="180" height="25" />
      </FormRow>

      <FormRow>
        <TextField label="微信" :text="user_company.wechat" width="300" height="25" />
        <TextField label="qq" :text="user_company.qq" width="180" height="25" />
      </FormRow>
      <FormRow>
        <TextField label="实名认证" v-bind:text="is_identifiy == 1?'已认证':'未认证'" width="180" height="25" />
        <router-link v-if="is_identifiy == 0" to="/ucenter/authentication" class="goidentifiy">去认证</router-link>
      </FormRow>
    </div>

    <div class="info-section company-info" v-if="usertype == 3">
      <div class="info-title">企业信息</div>
      <FormRow>
        <TextField label="企业名称" :text="user_company.company_name||''" width="300"  />

        <TextField label="所属行业" :text="user_company.business_scope_cate||''" width="220" />
      </FormRow>

      <FormRow>
        <TextField
          label="经营方式"
          v-bind:text="companyForm(user_company.company_form)"
          width="220"
          height="25"
        />
      </FormRow>
    </div>
  </MemberRightWrap>
</template>

<script>
import MemberRightWrap from "../../components/MemberRightWrap";
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import TextField from "@components/form/TextField";
import Button from "@components/form/Button";

export default {
  components: {
    MemberRightWrap,
    FormRow,
    FieldWrap,
    InputField,
    TextField,
    Button,
  },
  props: {},
  data() {
    return {
      companyFormGroup: this.$store.state.company.companyFormGroup,
      //usertype: "",
      //is_identifiy: "",
      //user_company: {}
    };
  },
  computed: {
    companyForm() {
      return id => {
        let text = "";
        this.companyFormGroup.forEach(item => {
          if (id == item.id) {
            text = item.text;
          }
        });
        return text;
      };
    },
    user_info(){
      return this.$store.state.profile.user_info||{};
    },
    user_company() {
      return this.$store.state.profile.user_company||{};
    },
    is_identifiy(){
      return this.$store.state.profile.user_info.is_identifiy>>0;
    },
    usertype(){
      return this.$store.state.profile.user_info.type>>0;
    }
  }

};
</script>

<style lang="scss" scoped>
.user-profile {
  margin-top: 30px;
  text-align: center;

  .personal-img {
    width: 84px;
    height: 84px;
    border: 1px solid $green;
    border-radius: 50%;
  }
  .company-name {
    margin: 10px auto;
    font-size: 18px;
  }
  .user-name {
    font-size: 16px;
    color: #479e84;
  }
}

.info-section {
  margin-top: 45px;
  margin-bottom: 30px;
  padding: 0 50px;

  font-size: 14px;
  .info-title {
    color: $green;
    font-size: 16px;
  }
}

.user-info {
  border-bottom: 1px dotted #eaeced;
}
.input-auth {
  margin-left: 85px;
}
.goidentifiy{color:$ac;}
</style>