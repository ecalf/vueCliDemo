<template>
  <div class="home">
    <HelloWorld msg="<h3>dfsadf</h3>Welcome to Your account" />
    <h2>test i18n account.pageTile: {{$t('account.pageTile')}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Account",
  components: {
    HelloWorld
  }
};
</script>
