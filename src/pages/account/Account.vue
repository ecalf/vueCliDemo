<template>
  <div id="app">
    <div id="nav">
      <a href="/test"> test </a> |
      <router-link to="/ucenter/login">login</router-link> |
      <router-link to="/ucenter/xxx">login xxx</router-link> |
      <router-link to="/account/xxx">account xxx</router-link> |
      <router-link to="/account/home">account</router-link> |
      <router-link to="/account/modify">modify</router-link> 

      
    </div>
    <router-view />
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
