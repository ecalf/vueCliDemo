<template>
  <div class="resgister-btn">
    <div class="register-cell-hd read-checkbox">
      <input type="checkbox" />
      <span class="iconfont iconicon-test"></span>我已阅读并接受
      <a href>用户协议</a> 和
      <a href>隐私政策</a>
    </div>
    <div class="register-cell-btn">
      <button class="btn-large" @click="registersubmit">{{ resbtn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "resgisterbtn",
  props: {
    resbtn: String
  },
  methods:{
    registersubmit(){
      this.$emit('registerHeadsubmit');
    }
  }
};
</script>

<style lang='scss' scoped>
.read-checkbox {
  position: relative;
  font-size: 12px;

  span {
    display: inline-block;
    border: 1px solid #4e5a65;
    border-radius: 3px;
    margin-right: 3px;
    font-size: 12px;
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);

    &:before {
      opacity: 0;
    }
  }

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
  .btn-large {
    width: 100%;
    display: block;
    height: 36px;
    background-color: #44a78d;
    border-radius: 3px;
    color: #fefefe;
    text-align: center;
    font-size: 16px;
  }
}
</style>