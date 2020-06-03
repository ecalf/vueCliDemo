<template>
  <MemberRightWrap title="供应商库" v-bind:searchconfig="searchconfig">
    <BarNav v-bind:navlist="navlist" @switch-tab="switchTab" />
    
    <div class="purchase-order">
        <ul>

            <li v-for="(item,index) of supplierList">
                <img class="item-logo" src="/img/logo.6110f8ba.png" />
                <p class="item-text">企业名称</p>
                <p class="item-text">主营业务</p>
                <p class="item-text">联系人：xxxx</p>
                <p class="item-text">电话：xxxx</p>
                <div class="item-action">
                    <span class="action-link">查看主页</span>
                    <span class="action-del">删除</span>
                </div>
            </li>
        </ul>    
    </div>
    


    <Errormsg v-if="total==0" />
    <!--分页 -->
    <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
      <Pagination
          v-bind:inputAllowed="false"
          v-bind:total="total"
          v-bind:size="page_size"
          v-bind:curent="page_index" 
          @switch-page="switchPage"
          />
    </div>
  </MemberRightWrap>
</template>

<style lang="scss" scoped>
.purchase-order {
    padding-top:22px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;

    width: 100%;
    border-radius: 5px;
    margin-bottom: 2px;
    line-height: 24px;
    white-space: nowrap;

    li {
        display: inline-block;
        width:220px;
        height:300px;
        font-size:16px;
        margin-bottom:20px;
        padding:20px 20px 12px;
        text-align: left;
        vertical-align: middle;
        overflow: hidden;

        @include default-border;
        @include default-radius;

        .item-logo{
            display: block;
            margin:14px auto 28px;
            height: 35px;
        }
        .item-text{
            margin-bottom: 18px;
            height: 20px;
            line-height: 20px;
        }
        .item-name{
            font-size:18px;
            line-height: 18px;
        }
        .item-action{
            display: flex;
            justify-content: space-between;
            font-size:14px;

            .action-link,.action-del{
                height:30px;
                line-height: 30px;
                text-align: center;
                cursor:default;
                color:$bgwhite;
                @include default-radius;

            }
            .action-link{
                width:100px;
                background-color: #479e84;
            }
            .action-del{
                width:60px;
                background-color: #f23a3b;
            }
        }
      }
    }
}
</style>

<script>
import MemberRightWrap from "../../components/MemberRightWrap";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";
import BarNav from "../../components/BarNav";

    export default {
        components:{
            MemberRightWrap,
            Errormsg,
            Pagination,
            BarNav,
        },
        props:{},
        data(){
            return {
                searchconfig:{
                    name:"keyword",
                    handler:(name,keyword)=>{
                      this.onSearch(name,keyword);
                    }
                },
                navlist: [
                    {id:0, title: "全部",active:true }, 
                    {id:1, title: "合作过" },
                    {id:2, title: "我的收藏" }
                ],
                supplierList:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],

                type:0,
                total:0,
                page_size:10,
                page_index:1
            }
        },
        methods:{
            onSearch(name,keyword){
              this.keyword = keyword;
              this.page_index = 1;
              this.getSupplier();
            },
            switchTab(item){
              this.type = item.id*1;
              this.page_index = 1;
              this.getSupplier();
            },
            switchPage(page_index){
              this.page_index = page_index*1;
              this.getSupplier();
            },
            async getSupplier(){
                const params = {
                    type:this.type,
                    page_index:this.page_index,
                    page_size:this.page_size,
                    keyword:this.keyword
                }

                console.log(params);

            }

        }
    }
</script>