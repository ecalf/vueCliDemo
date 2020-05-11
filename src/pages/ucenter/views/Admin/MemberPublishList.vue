<template>
<div class="mshow-wrap mb20">
    <div class="mshow-nav">
        <a href="javascript:;" class="active" @click.stop="getNeeds(1)">我的采购</a>
        <a href="javascript:;" @click.stop="getNeeds(2)">我的销售</a>
        <a href="javascript:;" @click.stop="getNeeds(3)">我的委托</a>
    </div>
    
    <!--订单-->
    <OrderList v-bind:list="list" />

    <!--分页 v-if="total>page_size" -->
    <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
            <Pagination
                v-bind:inputAllowed="true"
                v-bind:total="total"
                v-bind:size="page_size"
                v-bind:curent="page_index" 
                @switch-page="switchPage"
                />
    </div>
</div>

</template>

<style lang="scss">
    .mshow-box {
      margin-bottom: 28px;
    }
    .mshow-nav {
      margin-bottom: 15px;
      &:before {
        content: "";
        display: inline-block;
        width: 3px;
        height: 20px;
        background-color: #479e84;
        margin-right: 10px;
        vertical-align: -4px;
      }

      a {
        color: #707070;
        font-size: 16px;
        padding-right: 35px;
        &:hover,
        &.active {
          color: #44a78d;
        }
      }
    }

    .mshow-wrap {
      background: #ffffff;
      padding: 15px 15px 30px;
    }
</style>


<script>
    import OrderList from "@components/OrderList";
    import Pagination from "@components/Pagination";
    import {getMyNeeds} from "@api/userApi";


    export default {
        components:{
            OrderList,
            Pagination

        },
        props:{},
        data(){
            return {
                total:35,
                page_size:5,
                page_index:1,
                type:1,//1 采购,2 销售,3 委托
                list:[]
            }
        },
        computed:{
            

        },
        methods:{
            switchPage(page_index){
                this.page_index = page_index*1;
                this.getNeeds();
            },
            switchType(type){
                this.type = type*1;
                this.getNeeds();
            },
            async getNeeds(){
                let params = {
                    page_size:this.page_size,
                    page_index:this.page_index,
                    type:this.type 
                }

                let res =  await getMyNeeds(params);
                if(res.code!=200){
                    this.$message({
                      showClose: true,
                      message: res.message,
                      type: "error"
                    });
                }else{
                    let data = res.data;
                    this.total = data.total;
                    this.list = data.list;

                }
                
            }
        }

    }
</script>