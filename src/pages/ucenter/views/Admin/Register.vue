<template>
  <div class="commonweb register-web">
    <div class="register-header clearfix">
      <p class="register-tip fr">
        已有帐号，
        <a href class="account-login">马上登录</a>|
        <a href>返回首页</a>
      </p>
      <a href class="login-logo">
        <img src="@assets/images/logo.png" alt />
      </a>
    </div>
    <div class="bgcolor-white m-pb52">
      <ul class="register-nav">
        <li @click="show=0" :class="{'active':show===0}">
          <span>个人注册</span>
        </li>
        <li @click="show=1" :class="{'active':show===1}">
          <span>机构注册</span>
        </li>
        <li @click="show=2" :class="{'active':show===2}">
          <span>企业注册</span>
        </li>
      </ul>
      <div class="register-form-wrap">
        <div class="register-cell-form">
          <div class="reg-country clearfix">
            <span class="country-title">国家选择</span>
            <select class="country-select" v-model="selectItem" @change="selectFn($event)">
              <option v-for="item in items" :key="item.id"> {{ item.name}}</option>
            </select>
          </div>
          <!--个人注册-->
          <div class="register-cell" v-show="show===0">
            <form class="personal-form">
              <!--中国注册-->
              <div class="china-register" v-show="countryShow">
                <div class="register-cell-hd">
                  <input type="text" placeholder="手机号码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="验证码" class="m-input register-code-input" />
                  <button class="register-code-button m-input">发送验证码</button>
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="设置密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="确认密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="邀请码" class="m-input" />
                </div>
                <ResgisterBtn resbtn="立即注册" />
              </div>
              <!-- 国外注册 -->
              <div class="foreign-register" v-if="countryShow">
                <div class="register-cell-hd">
                  <input type="text" placeholder="用户名" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="邮箱" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="设置密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="确认密码" class="m-input" />
                </div>
                <ResgisterBtn resbtn="立即注册" />
              </div>
            </form>
          </div>
          <!--机构注册-->
          <div class="register-cell" v-show="show===1">
            <form class="personal-form">
              <!--中国注册-->
              <div class="china-register">
                <div class="register-cell-hd">
                  <input type="text" placeholder="账号" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="手机号码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="验证码" class="m-input register-code-input" />
                  <button class="register-code-button m-input">发送验证码</button>
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="设置密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="确认密码" class="m-input" />
                </div>
                <ResgisterBtn resbtn="立即注册" />
              </div>
              <!-- 国外注册 -->
              <div class="foreign-register">
                <div class="register-cell-hd">
                  <input type="text" placeholder="机构名称" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="用户名" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="邮箱" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="设置密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="确认密码" class="m-input" />
                </div>
                <ResgisterBtn resbtn="立即注册" />
              </div>
            </form>
          </div>
          <!--企业注册-->
          <div class="register-cell" v-show="show===2">
            <form class="personal-form">
              <!--中国注册-->
              <div class="china-register">
                <div class="register-cell-hd">
                  <input type="text" placeholder="公司名称" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="联系人" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="手机号码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="验证码" class="m-input register-code-input" />
                  <button class="register-code-button m-input">发送验证码</button>
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="设置密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="确认密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="邀请码" class="m-input" />
                </div>
                <ResgisterBtn resbtn="立即注册" />
              </div>
              <!-- 国外注册 -->
              <div class="foreign-register">
                <div class="register-cell-hd">
                  <input type="text" placeholder="企业名称" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="用户名" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="邮箱" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="设置密码" class="m-input" />
                </div>
                <div class="register-cell-hd">
                  <input type="text" placeholder="确认密码" class="m-input" />
                </div>
                <ResgisterBtn resbtn="立即注册" />
              </div>
            </form>
          </div>
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
export default {
  components: {
    ResgisterBtn
  },
  data() {
    return {
      show: 0, //判断切换注册方式
      countryShow:true,
      selectItem:'中国',
      items: [{name:"中国" }, {name:"国外" }],
     
    };
  },
  created() {
    this.$emit("header", false);
    this.$emit("footer", false);
  },
  methods: {
    selectFn(e) {
      console.log(e);
      console.log(e.target.selectedIndex); // 选择项的index索引
      console.log(e.target.value); // 选择项的value
     
      
    }
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
  padding: 70px 35px;
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
    padding: 0 10px;
  }
}

.register-cell {
  .register-cell-hd {
    margin-bottom: 10px;
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
</style>