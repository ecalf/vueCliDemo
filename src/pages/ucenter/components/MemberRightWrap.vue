<template>
  <div class="membermg">
    <div class="member-web commonweb clearfix">
      <Mleftnav />
      <div class="member-right common-slide">
         <div class="memcommon-title clearfix">
            <ListTopSearchBar v-if="searchconfig&&searchconfig.name" v-bind:config="searchconfig" />
            <h3>{{title}}</h3>
        </div>

        <div class="memcommon-content">
            <slot name="default" />
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    
</style>

<script>
    import Mleftnav from "@components/Mleftnav";
    import ListTopSearchBar from "../components/ListTopSearchBar";

    export default {
        components:{
          Mleftnav,
          ListTopSearchBar
        },
        props:{
          title:String,
          searchconfig:Object //搜索的配置与列表模块关联，如果需要搜索需要传入配置
        },
        data(){
            return {

            }
        },
        methods:{
            
        }
    }
</script>