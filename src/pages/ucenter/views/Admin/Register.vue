<template>
  <div class="commonweb register-web">
    <div class="register-header clearfix">
      <p class="register-tip fr">
        已有帐号，
        <router-link class="account-login" to="/ucenter/login">马上登录</router-link>|
        <a href="/">返回首页</a>
      </p>
      <a href class="login-logo">
        <img src="@assets/images/logo.png" alt />
      </a>
    </div>
    <div class="bgcolor-white m-pb52">

      <ul class="register-nav">
        <li
          v-for="(navitem,index) in navlist"
          :key="index"
          @click="navclick(index)"
          :class="{'active':show===index}"
        :value="index+1" >
          <span>{{navitem.name}}</span>
        </li>
      </ul>

      <div class="register-form-wrap">
        <div class="register-cell-form">
          <el-form :model="registerForm" :rules="rules" ref="registerForm">

            <!-- 切换国家 -->
            <div class="reg-country clearfix">
              <span class="country-title">国家选择</span>

              <el-form-item label class="country-select">
                <el-select
                  v-model="registerForm.country"
                  placeholder="xx"
                  @change="selectCountry($event)"
                >
                  <el-option
                    v-for="(item) in countryList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.country"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>

            <!--个人注册-->
            <div class="register-cell" v-if="show==0">
              <!--中国注册-->
              <div class="china-register" v-if="num">
                <el-form-item label prop="mobile" class="register-cell-hd">
                  <el-input v-model="registerForm.mobile" placeholder="手机号码" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="code" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.code"
                    placeholder="请输入6位验证码"
                    class="m-input register-code-input"
                  ></el-input>
                  <span
                    class="register-code-button m-input"
                    @click.stop="sendCode()"
                    v-if="get_code"
                  >发送验证码</span>
                  <span class="register-code-button m-input" v-else>{{count}}秒后重新获取</span>
                </el-form-item>
                <el-form-item label prop="password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="设置密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="re_password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.re_password"
                    type="password"
                    placeholder="确认密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
              </div>



              <!-- 国外注册 -->
              <div class="foreign-register" v-else>
                <el-form-item label prop="user_name" class="register-cell-hd">
                  <el-input v-model="registerForm.user_name" placeholder="用户名" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="设置密码,长度至少8位"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="re_password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.re_password"
                    type="password"
                    placeholder="确认密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
              </div>

            </div>


            <!--机构注册-->
            <div class="register-cell" v-else-if="show==1">
              <!--中国注册-->
              <div class="china-register" v-if="num">
                <el-form-item label prop="organization_name" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.organization_name"
                    placeholder="机构名称"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="mobile" class="register-cell-hd">
                  <el-input v-model="registerForm.mobile" placeholder="手机号码" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="code" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.code"
                    placeholder="请输入6位验证码"
                    class="m-input register-code-input"
                  ></el-input>
                  <span
                    class="register-code-button m-input"
                    @click.stop="sendCode()"
                    v-if="get_code"
                  >发送验证码</span>

                </el-form-item>
                <el-form-item label prop="password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="设置密码,长度至少8位"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="re_password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.re_password"
                    type="password"
                    placeholder="确认密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
              </div>
              <!-- 国外注册 -->
              <div class="foreign-register" v-else>
                <el-form-item label prop="organization_name" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.organization_name"
                    placeholder="机构名称"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="user_name" class="register-cell-hd">
                  <el-input v-model="registerForm.user_name" placeholder="用户名" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="设置密码,长度至少8位"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="re_password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.re_password"
                    type="password"
                    placeholder="确认密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
              </div>
            </div>



            <!--企业注册-->
            <div class="register-cell" v-else>
              <!--中国注册-->
              <div class="china-register" v-if="num">
                <el-form-item label prop="company_name" class="register-cell-hd">
                  <el-input v-model="registerForm.company_name" placeholder="企业名称" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="contact_name" class="register-cell-hd">
                  <el-input v-model="registerForm.contact_name" placeholder="联系人" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="mobile" class="register-cell-hd">
                  <el-input v-model="registerForm.mobile" placeholder="手机号码" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="code" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.code"
                    placeholder="请输入6位验证码"
                    class="m-input register-code-input"
                  ></el-input>
                  <span
                    class="register-code-button m-input"
                    @click.stop="sendCode()"
                    v-if="get_code"
                  >发送验证码</span>

                </el-form-item>
                <el-form-item label prop="password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="设置密码,长度至少8位"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="re_password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.re_password"
                    type="password"
                    placeholder="确认密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
              </div>
              <!-- 国外注册 -->
              <div class="foreign-register" v-else>
                <el-form-item label prop="company_name" class="register-cell-hd">
                  <el-input v-model="registerForm.company_name" placeholder="企业名称" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="user_name" class="register-cell-hd">
                  <el-input v-model="registerForm.user_name" placeholder="用户名" class="m-input"></el-input>
                </el-form-item>
                <el-form-item label prop="password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="设置密码,长度至少8位"
                    class="m-input"
                  ></el-input>
                </el-form-item>
                <el-form-item label prop="re_password" class="register-cell-hd">
                  <el-input
                    v-model="registerForm.re_password"
                    type="password"
                    placeholder="确认密码"
                    class="m-input"
                  ></el-input>
                </el-form-item>
              </div>
            </div>


            <div class="resgister-btn">
              <el-form-item class="register-cell-hd read-checkbox" prop="checkbox">
                <el-checkbox v-model="registerForm.checkbox" label name="checkbox"></el-checkbox>&nbsp;&nbsp;我已阅读并接受
                <a href>用户协议</a> 和
                <a href>隐私政策</a>
              </el-form-item>
              <el-form-item class="register-cell-btn">
                <el-button class="btn-large" type="primary" @click="submitForm()">立即注册</el-button>
              </el-form-item>
            </div>

          </el-form>
        </div>
      </div>
    </div>
    <div class="register-footer">
      <h1>深圳迈万和优采股份有限公司</h1>
      <p>京ICP备11017824号-4 / 京ICP证130164号 北京市公安局朝阳分局备案编号:110105000501</p>
      <p>Copyright © 2006-2018 ZCOOL 中文 English</p>
    </div>
  </div>
</template>
<script>
import ResgisterBtn from "@components/Register/ResgisterBtn";
import { bindPhoneCode, submitRegister } from "@api/userApi";
import { setToken } from "@utils/common";


export default {
  components: {
    ResgisterBtn
  },
  data() {
    var validatetelnumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (value !== "") {
          let reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error("请输入正确的手机号！"));
          }
        }
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
          callback(new Error("请输入密码"));
      } else {
        if(value.length<8){
          callback(new Error("密码长度不能少于8位"));
        }else if (this.registerForm.re_password !== "") {
          this.$refs.registerForm.validateField("re_password");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    let countryList = [
      { id: 0, name: "中国", country: "China" },
      { id: 1, name: "国外", country: "America" }
    ];

    return {
      show: 0, //判断切换注册方式
      num: true,
      get_code: true,
      isgetcode: false, // 是否获取过code
      count: 60,
      type:1,
      navlist: [
        { name: "个人注册" },
        { name: "机构注册" },
        { name: "企业注册" }
      ],
      countryList:countryList ,
      registerForm: {
        mobile: "",
        code: "",
        password: "",
        re_password: "",
        state_code: "",
        checkbox: "",
        user_name: "",
        company_name: "",
        contact_name: "",
        organization_name: "",
        country: countryList[0].country
      },
      rules: {
        mobile: [
          { required: true, validator: validatetelnumber, trigger: "blur" }
        ],
        code: [
          {
            required: true,
            min: 6,
            max: 6,
            trigger: "blur",
            message: "请输入正确的验证码"
          }
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        re_password: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        user_name: [
          { required: true, trigger: "blur", message: "请输入用户名" }
        ],
        company_name: [
          { required: true, trigger: "blur", message: "请输入企业名称" }
        ],
        contact_name: [
          { required: true, trigger: "blur", message: "请输入联系人" }
        ],
        organization_name: [
          { required: true, trigger: "blur", message: "请输入机构名称" }
        ],
        checkbox: [
          {
            required: true,
            message: "您未勾选同意我们的相关注册协议",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {
    this.$emit("header", false); //移除头部
    this.$emit("footer", false); //移移底部
  },
  methods: {
    navclick(index) {
      this.show = index;
      this.$refs.registerForm.resetFields();
    
    },
    selectCountry(e) {
      if (e == 'China') {
        this.num = true;
      } else {
        this.num = false;
      }
      this.$refs.registerForm.resetFields();
    },
    // 发送短信验证码
    async sendCode() {
      if (this.registerForm.mobile !== "") {
        this.get_code = false;
        this.isgetcode = true;
        let interval = setInterval(() => {
          this.count--;
          if (this.count < 1) {
            this.get_code = true;
            this.count = 60;
            clearInterval(interval);
          }
        }, 1000);
      } else {
        this.$message({
          showClose: true,
          message: "请输入手机号",
          type: "error"
        });
      }


      let params = {
        data: {
          mobile: this.registerForm.mobile,
          type: 2//1.login  2.register
        }
      };
      const data = await bindPhoneCode(params);

    },



    submitForm() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          let params = {
            data:{
              mobile: this.registerForm.mobile,
              code: this.registerForm.code,
              password: this.registerForm.password,
              re_password: this.registerForm.re_password,
              state_code: this.registerForm.country=='China'?86:'',//国家代号,暂只处理中国设为86,国外为空
              user_name: this.registerForm.user_name,
              company_name: this.registerForm.company_name,
              contact_name: this.registerForm.contact_name,
              organization_name: this.registerForm.organization_name,
              country: this.registerForm.country,
              type:this.show*1+1 //注册类型 1个人 2 机构 3企业
            }
          }

          //console.log('submitRegister params: ',params);

          let res = await submitRegister(params);
          //console.log("submitRegister res: ",data);

          if(res.code!==200){
            this.$message({
              showClose: true,
              message: res.message,
              type: "error"
            });

          }else{
            const profile = setToken(res.data.token,res.data.client);
            this.$store.commit('profile/updateProfile',profile);
            location.href='/';
          }
          

        } else {
          console.log("register validate error!!");
          return false;
        }
      });
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="scss" scoped>
/*注册*/
.register-web {
  width: 900px;
}

.register-tip {
  padding-top: 15px;

  a {
    color: #4e5a65;
    padding: 0 10px;

    &.account-login {
      padding-left: 0;
    }

    &:hover {
      color: #44a78d;
    }
  }
}

.register-header {
  padding: 70px 0 40px;
}

.register-nav {
  font-size: 0;
  border-radius: 3px;

  li {
    display: inline-block;
    vertical-align: middle;
    width: 33.3%;
    height: 75px;
    background-color: #44a78d;
    line-height: 75px;
    font-size: 18px;
    color: #fefefe;
    text-align: center;
    position: relative;
    cursor: pointer;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg, #43a78d 0%, #34e9ee 100%);
      opacity: 0;
    }

    span {
      position: relative;
      z-index: 1;
    }

    &.active {
      font-weight: bold;

      &:before {
        opacity: 0.68;
      }
    }
  }
}

.m-pb52 {
  padding-bottom: 52px;
}

.register-form-wrap {
  width: 430px;
  margin: 0 auto;
}

.reg-country {
  margin: 35px 0 15px;
  position: relative;

  &:before {
    content: "";
    width: 276px;
    height: 1px;
    position: absolute;
    top: 18px;
    left: 65px;
    background: #a6acb1;
  }

  .country-title {
    display: inline-block;
    color: #4e5a65;
    font-weight: bold;
    padding-top: 8px;
  }

  .country-select {
    float: right;
    width: 84px;
    height: 32px;
    background-color: #d8dcdf;
    background-image: linear-gradient(0deg, #d9dde0 0%, #f2f4f5 100%);
    border-radius: 3px;
    color: #4e5a65;
    font-weight: bold;
    padding: 0;
  }
}

.register-cell {
  .register-cell-hd {
    margin-bottom: 15px;
  }
}

.register-code-input {
  display: inline-block;
  width: 70%;
  margin-right: 2%;
}

.register-code-button {
  display: inline-block;
  width: 34-6%;
  padding-left: 0;
  vertical-align: top;
  text-align: center;
  line-height: 38px;
}

.register-footer {
  color: #4e5a65;
  text-align: center;
  padding: 13px 0;
  h1 {
    font-size: 14px;
    margin: 0;
  }
}

.read-checkbox {
  position: relative;
  font-size: 12px;

  a {
    color: #44a78d;
  }
}

.read-checkbox input {
  width: 18px;
  height: 18px;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 2;

  &:checked + span {
    &:before {
      opacity: 1;
    }
  }
}

.register-cell-btn {
  margin-top: 50px;
  cursor: pointer;
  .btn-large {
    width: 100%;
    display: block;
    height: 36px;
    line-height: 36px;
    background-color: #44a78d;
    border-radius: 3px;
    color: #fefefe;
    text-align: center;
    font-size: 16px;
    padding: 0;
  }
}
</style>