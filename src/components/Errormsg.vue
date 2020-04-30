<template>
  <div class="errormsg">
    <p>
      <img src="../assets/images/error.png" alt />
    </p>
    <p>抱歉 Sorry！~ 没有找到符合条件的商品</p>
  </div>
</template>
<script>
export default {
  name: "errormsg"
};
</script>
<style lang="scss" scoped>
.errormsg {
  padding: 80px 0;
  color: #4e5a65;
  text-align: center;
  font-size: 16px;
  img {
    margin-bottom: 40px;
  }
}
</style>
