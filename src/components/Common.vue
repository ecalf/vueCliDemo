<template>
  <div class="hello">
    <h1>test component in folder @component</h1>
    <h3>{{ txt }},{{p}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      txt:'component from @component/'
    };
  },
  name: "Common",
  props: {
    p: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
