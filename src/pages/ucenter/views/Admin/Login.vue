<template>
  <div class="module-loginWrap">
    <div class="commonweb clearfix">
      <a href class="login-logo pt60">
        <img src="@assets/images/logo.png" alt />
      </a>
      <div class="login-title-info">
        <h2>专业进出口供应链服务</h2>
        <h3>一站式供销服务平台</h3>
      </div>
      <div class="clearfix">
        <div class="login-module fr">
          <span class="wei-toggle" :class="{ifshow}" @click="toggle"></span>
          <div v-show="ifshow">
            <div class="login-navbar">
              <button @click="switchSignupType(0)" :class="{'active':show===0}">密码登录</button>
              <button @click="switchSignupType(1)" :class="{'active':show===1}">手机登录</button>
            </div>

            <div class="signup-wrap">
                <el-form :model="signupForm" :rules="rules" ref="signupForm" class="signup-form">


                <!--密码登录-->
                <div class="password-login" v-if="show==0">  
                  <el-form-item class="login-bd" label prop="user_name">
                    <el-input v-model="signupForm.user_name" placeholder="手机号/用户名" class="m-input"></el-input>
                  </el-form-item>

                  <el-form-item class="login-bd" label prop="password">
                    <el-input v-model="signupForm.password" type="password" placeholder="设置密码" class="m-input"></el-input>
                  </el-form-item>

                    <div class="other-link">
                      <router-link class="fr" to="/ucenter/register">免费注册</router-link>
                      <a href='javascript:;'>忘记密码？</a>
                    </div>
                </div>
                <!--密码登录 end-->


                <!--手机登录-->
                <div class="mobile-login" v-else>
                     <el-form-item class="login-bd" label prop="mobile">
                      <span class="area-code">+86</span>
                      <el-input placeholder="请输入手机号" v-model="signupForm.mobile" class="m-input area-code-mobile"></el-input>
                    </el-form-item>
           
                    <el-form-item label prop="code" class="login-bd">
                      <el-input
                        v-model="signupForm.code"
                        placeholder="请输入6位验证码"
                        class="m-input code-input"
                      ></el-input>

                      <span
                        class="code-button m-input"
                        @click.stop="sendCode()"
                        v-if="get_code"
                        >发送验证码</span>

                      <span class="code-button m-input" v-else>{{count}}秒后重新获取</span>
                    </el-form-item>

                  <div class="other-link">
                    <a href="/ucenter/register" class="fr">免费注册</a>
                  </div>                 
                </div>
                <!--手机登录 end-->


                 <a class="login-button" @click="login()">登录</a>
               </el-form>
            </div>


          </div>


          <!--手机扫码登录-->
          <div class="login-qrcode" v-if="!ifshow">
            <h3 class="qrcode-title">手机扫码安全登录</h3>
            <p class="qrcode-img">
              <img src="@assets/images/weicode.jpg" alt />
            </p>
            <p>打开 微信 扫一扫登录</p>
            <p class="enter-link">
              <a href="javascript:;" @click="switchSignupType(0)">密码登录</a>
              <a href="/ucenter/register">免费注册</a>
            </p>
          </div>


        </div>
      </div>
      <div class="close-order">
        <h3 class="news-order-title">最新成交订单</h3>
        <div class="scroll-height">
          <div
            class="news-order-wrap"
            :class="{anim:animate}"
            @mouseenter="Stop()"
            @mouseleave="Up()"
          >
            <!--滚动-->

            <ul class="clearfix success-order-list" v-for="(item,i) in items" :key="i">
              <li class="li1">
                <span class="iconannoyed kicon">急</span>
                <h2 class="m-style-title fs20 ellipsis">{{item.name}}</h2>
              </li>
              <li class="li2">
                <span class="medical-use">民用</span>
                <p class="m-pro-title ellipsis">{{item.title}}</p>
              </li>
              <li>
                <span class="m-num">{{item.num}}</span>
              </li>
              <li>
                <span class="m-price">{{item.price}}</span>
              </li>
              <li>
                <span class="iconannoyed kicon">急</span>
                <span class="icontop kicon">急</span>
                <span class="iconcompany kicon">急</span>
                <span class="iconorder kicon">急</span>
              </li>
              <li>
                <span class="sucess-button">已成交</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {routeTo} from "@utils/enhanceRouter";
import { bindPhoneCode, submitLogin } from "@api/user";
import { isInSite,setToken } from "@utils/common";


let orderList = [
    {
      name: "呼吸机呼吸机",
      title: "S9 VPAP ST主机 VPAP ST主机主1...",
      num: "1500/个",
      price: "￥200,000"
    },
    {
      name: "呼吸机呼吸机",
      title: "S9 VPAP ST主机 VPAP ST主机主2...",
      num: "1500/个",
      price: "￥200,000"
    },
    {
      name: "呼吸机呼吸机",
      title: "S9 VPAP ST主机 VPAP ST主机主3...",
      num: "1500/个",
      price: "￥200,000"
    },
    {
      name: "呼吸机呼吸机",
      title: "S9 VPAP ST主机 VPAP ST主机主1...",
      num: "1500/个",
      price: "￥200,000"
    },
    {
      name: "呼吸机呼吸机",
      title: "S9 VPAP ST主机 VPAP ST主机主2...",
      num: "1500/个",
      price: "￥200,000"
    }
  ];

export default {
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
          }else if (this.signupForm.re_password !== "") {
            this.$refs.signupForm.validateField("re_password");
          }
          callback();
        }
      };

    return {
      show: 0, //判断切换登录方式
      ifshow: true,//账号密码登录,显示扫码登录图标
      animate: false,
      intNum: false,

      //手机验证码
      get_code: true,
      isgetcode: false, // 是否获取过code
      count: 60,


      signupForm:{
        user_name:'',
        mobile:'',
        password:'',
        code:''
      },

      rules: {
        user_name:[
          { required: true, trigger: "blur", message: "请输入用户名" }
        ],
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
        ]
      },


      
      items: orderList
    };
  },
  created() {
    this.ScrollUp();
    this.$emit('header', false);
    this.$emit('footer', false);
  },
  methods: {
    switchSignupType(type){
      this.$refs.signupForm.resetFields();
      this.ifshow = true;
      this.show = type;
    },
    toggle() {
      this.$refs.signupForm.resetFields();
      this.ifshow = !this.ifshow;
    },

    ScrollUp() {
      this.intNum = setInterval(() => {
        this.animate = true; // 向上滚动的时候需要添加css3过渡动画
        setTimeout(() => {
          this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
          this.items.shift(); //删除数组的第一个元素
          this.animate = false;
        }, 500);
      }, 2000);
    },
    //鼠标移上去停止
    Stop() {
      clearInterval(this.intNum);
    },
    Up() {
      this.ScrollUp();
    },


    // 发送短信验证码
    async sendCode() {
      if (this.signupForm.mobile !== "") {
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
          mobile: this.signupForm.mobile,
          type: 1//1.login  2.register
        }
      };

      const data = await bindPhoneCode(params);

    },

    async login(){
      this.$refs.signupForm.validate(async valid => {
        if (valid) {
          let params = {
            data:{
              type: this.signupForm.mobile?'code_login':'pass_login', 
              //账户登录
              user_name: this.signupForm.user_name,
              password: this.signupForm.password,
              //手机登录
              mobile:this.signupForm.mobile,
              code: this.signupForm.code,//验证码
              state_code:86//国家区号
            }
          }


          //console.log('signupForm: ',params);
          
          let res = await submitLogin(params);
          if(res.code!==200){
            this.$message({
              showClose: true,
              message: res.message,
              type: "error"
            });

          }else{
            //console.log('data:',res.data);

            const profile = setToken(res.data.token,res.data.client);
            this.$store.commit('profile/updateProfile',profile);
            this.$router.push('/ucenter/member');


            
            /*if(isInSite()&&document.referrer.indexOf('ucenter/login')==-1){
              location.href=document.referrer;
            }else{
              location.href='/';  
            }*/
            
          }
          

        } else {
          console.log("register validate error!!");
          return false;
        }
      });

    }
  }
};
</script>
<style lang="scss" scoped>
/*登录*/
.login-logo {
  display: block;
  img {
    height: 35px;
  }
}
.login-title-info{
   padding-top:55px;
   color:#fff;
   h2{
      font-size:22px;
      font-weight: bold;
   }
   h3{
      font-size:16px;
      position: relative;
      &:after{
         content:"";
         width:85px;
         height:2px;
         margin-top:5px;
         background:#fff;
         display: block;
      }
   }
}


.login-module {
   margin-top:-62px;
  width: 400px;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 25px 25px 38px;
  position: relative;
  min-height: 360px;
}

.login-navbar {
  button {
    display: inline-block;
    color: #4e5a65;
    margin-right: 40px;
    padding-bottom: 5px;
    position: relative;
    font-size: 18px;
    cursor: pointer;

    &.active {
      color: #44a78d;
      font-weight: bold;

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #44a78d;
        border-radius: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}

html,
body {
  min-height: 100%;
}
.module-loginWrap {
  min-height: 100%;
  background: url(~@assets/images/loginbg.jpg) center 0 no-repeat;
  background-size: cover;
}

.m-input {
  width: 100%;
  height: 38px;
  background-color: #eaeced;
  border-radius: 3px;
  color: #4e5a65;
  padding-left: 10px;

  // 使用webkit内核的浏览器
  &::-webkit-input-placeholder {
    color: #4e5a65;
  }

  // Firefox版本4-18
  &:-moz-placeholder {
    color: #4e5a65;
  }

  // Firefox版本19+
  &::-moz-placeholder {
    color: #4e5a65;
  }

  // IE浏览器
  &:-ms-input-placeholder {
    color: #4e5a65;
  }
}

.signup-form {
  padding-top: 48px;

  .login-bd {
    margin-bottom: 15px;
    position: relative;
  }
}

.other-link {
  clear: both;
  overflow: hidden;

  a {
    color: #4e5a65;
    font-size: 12px;

    &:hover {
      color: #44a78d;
    }
  }
}

.login-button {
  display: block;
  font-size: 16px;
  color: #fefefe;
  height: 36px;
  background-color: #44a78d;
  border-radius: 3px;
  line-height: 36px;
  text-align: center;
  margin-top: 58px;
  cursor:default;
}

.mobile-login {
  .code-input {
    display: inline-block;
    width: 60%;
    margin-right: 2%;
  }

  .code-button {
    display: inline-block;
    width: 38%;
    height: 38px;
    background-color: #eaeced;
    border-radius: 3px;
    color: #4e5a65;
    text-align: center;
    cursor: pointer;
  }
}

.mobile-login {
  .tel {
    padding-left: 50px;
  }
}

.area-code {
  position: absolute;
  left: 10px;
  top: 0;
  padding-left: 10px;
  z-index:1;
}
.area-code-mobile{
  padding-left:45px;
}

.code-input {
  display: inline-block;
  width: 70%;
  margin-right: 2%;
}




.wei-toggle {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 25px;
  top: 25px;
  background-image: url(~@assets/images/pc.jpg);
  background-position: 0;
  background-repeat: no-repeat;
  cursor: pointer;
  &.ifshow {
    background-image: url(~@assets/images/lweixin.jpg);
  }
}
.close-order {
  padding-bottom: 10%;
}
.success-order-list {
  display: table;
  width: 100%;
  margin-bottom: 2px;
  padding: 0 10px 0 35px;
  background: rgba(251, 251, 251, 0.6);
  max-width: 1150px;
  height: 60px;

  li {
    display: table-cell;

    height: 60px;
    vertical-align: middle;
    position: relative;
    font-size: 16px;
    text-align: center;
    &.li1 {
      width: 190px;
      padding-right: 35px;
      text-align: left;
      span {
        position: absolute;
        top: 50%;
        margin-top: -8px;
      }

      .m-style-title {
        padding-left: 25px;
      }
    }
    &.li2 {
      position: relative;
      text-align: left;
      width: 286px+24px;
      padding-right: 24px;
      span {
        position: absolute;
        top: 50%;
        margin-top: -12px;
      }
      .m-pro-title {
        padding-left: 35px;
      }
    }
  }
}

.close-order {
  padding-top: 178px;
}

.news-order-title {
  font-size: 16px;
  color: #fefefe;
  margin-bottom: 15px;
}

.qrcode-title {
  font-size: 16px;
  font-weight: bold;
  color: #4e5a65;
}

.login-qrcode {
  text-align: center;
  .qrcode-title {
    text-align: left;
    color: #4e5a65;
    font-size: 16px;
    margin-bottom: 54px;
  }
  .qrcode-img {
    margin-bottom: 12px;
    img {
      width: 120px;
      height: 120px;
    }
  }
}

.enter-link {
  padding-top: 10px;
  a {
    padding: 0 10px;
  }
}
.news-order-wrap {
  transition: top 0.8s;
}
.anim {
  transition: all 0.8s;
  position: relative;
  margin-top: -62px;
}

.scroll-height {
  height: 180px;
  overflow: hidden;
}
</style>
