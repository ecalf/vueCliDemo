<template>
  <div class="membermg">
    <div class="member-web commonweb clearfix">
      <Mleftnav />
      <div class="member-right common-slide">
         <div class="memcommon-title clearfix">
            <ListTopSearchBar
              v-if="searchconfig&&searchconfig.name"
              v-bind:config="searchconfig" 
            />
            <ListTopTabs 
              v-if="tabconfig&&tabconfig.tabs.length" 
              v-bind:config="tabconfig" 
            />

            <h3 v-if="!!title">{{title}}</h3>

            
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
    import ListTopTabs from "../components/ListTopTabs";

    export default {
        components:{
          Mleftnav,
          ListTopSearchBar,
          ListTopTabs
        },
        props:{
          title:String,
          searchconfig:Object, //搜索的配置与列表模块关联，如果需要搜索需要传入配置
          tabconfig:Object//tab 需要传入配置
        },
        data(){
            return {

            }
        },
        methods:{
            onSearch(){

            },
            switchTab(item){

            }
        }
    }
</script>