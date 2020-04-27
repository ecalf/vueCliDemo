<template>
  <div id="app">
    <div class="header">
      <div class="header-top">
        < <div class="commonweb">
              <p>欢迎来到万合优采<a  href="javascript:;">请登录</a><a href="javascript:;">免费注册</a></p>
          </div>
      </div>
      <div class="header-nav">
        <img src="/assets/login.jpg" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
