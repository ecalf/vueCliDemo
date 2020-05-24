<template>
<ul class="memcommon-tab" v-bind:data-name="config.name">
  <li 
      class="memcommon-tab-item"
      v-for="item of config.tabs"
      v-bind:key="item.id" 
      v-bind:data-value="item.id"
      v-bind:class="{active:curTabId==item.id}"
      @click="switchTab(item)"
      >
    {{item.text}}
  </li>
</ul>
</template>


<style lang="scss" scoped>
.memcommon-tab{
    .memcommon-tab-item{
        margin-right:40px;
        display: inline-block;
        font-size:16px;
        color:#999;
        cursor:default;

        &.active{
          font-weight:bold;
          color:#333;
        }
    }
}
</style>



<script>
export default {
    props:{
        config:Object
    },
    data(){
        let curTabId = this.config.tabs[0].id;
        this.config.tabs.forEach((item)=>{
            if(item.active){
                curTabId = item.id;
            }
        });

        return {
            curTabId:curTabId
        }
    },
    methods:{
        switchTab(item){
            this.curTabId = item.id;
            this.config.handler(this.config.name,item);
        }
    }
}


</script>