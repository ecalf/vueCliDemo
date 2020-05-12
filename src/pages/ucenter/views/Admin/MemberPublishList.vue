<template>
<div class="mshow-wrap mb20">
    <div class="mshow-nav">
        <a href="javascript:;" v-bind:class="{active:type==1}" @click.stop="switchType(1)">我的采购</a>
        <a href="javascript:;" v-bind:class="{active:type==2}" @click.stop="switchType(2)">我的销售</a>
        <a href="javascript:;" v-bind:class="{active:type==3}" @click.stop="switchType(3)">我的委托</a>
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



    //test
    let list  =  [
            {
                "id": 6,
                "user_id": 10,
                "type": 1, //类型 类型：1 发布采购 2 发布销售 3 委托销售',
                "title": "我要采购XXXXXXXX", //标题
                "desc": "描述fasdte", //描述
                "cate_id": 3, //品类id
                "band_id": 1, //品牌id
                "other_band": null,//其他品牌
                "price": 52, //价格
                "market_price": null, //市场价格
                "supplier_price": null, //供应商价格
                "benefit_price": null, //优惠价
                "is_discuss": 0, //是否面议 0 否 1 是
                "num": 35, //数量
                "use_way": 1, //1 医用 2 民用'
                "exit_country": "us", //出口国家
                "qualification": "53", //资质
                "images": "54", //图片
                "video": null,
                "info": "54", //富文本详情
                "dead_time": "2020-01-21 10:32:32", //截至日期
                "service_id": null, //服务id
                "status": null, //状态
                "files": null, //附件
                "created_at": "2020-05-06 12:08:30",//创建时间
                "updated_at": "2020-05-06 12:08:30",
                "product_category_cnname": "消杀用品及其主要原料、包装材料", //品类名称 （中文）
                "product_category_enname": "Killing products and their main raw materials and packaging materials",//品类名称 （英文）
                "product_brand_cnname": "北京同仁堂",//品牌名称（中文)
                "product_brand_enname": "Beijing Tongrentang" //品牌名称（英文）
            },
            {
                "id": 8,
                "user_id": 10,
                "type": 2,
                "title": "我要销售xxxxxx",
                "desc": "描述fasdte",
                "cate_id": 3,
                "band_id": 1,
                "other_band": null,
                "price": 52,
                "market_price": 32,
                "supplier_price": null,
                "benefit_price": 32,
                "is_discuss": 0,
                "num": 35,
                "use_way": 1,
                "exit_country": "us",
                "qualification": "53",
                "images": "54",
                "video": null,
                "info": "54",
                "dead_time": "2020-01-21 10:32:32",
                "service_id": null,
                "status": null,
                "files": null,
                "created_at": "2020-05-06 12:17:32",
                "updated_at": "2020-05-06 12:17:32",
                "product_category_cnname": "消杀用品及其主要原料、包装材料",
                "product_category_enname": "Killing products and their main raw materials and packaging materials",
                "product_brand_cnname": "北京同仁堂",
                "product_brand_enname": "Beijing Tongrentang"
            },
            {
                "id": 10,
                "user_id": 10,
                "type": 3,
                "title": "我要委托xxxxxx",
                "desc": "描述fasdte",
                "cate_id": 3,
                "band_id": 1,
                "other_band": null,
                "price": 52,//单价
                "market_price": 646.4,//市场价
                "supplier_price": 6436,//供应价
                "benefit_price": null,//优惠价
                "is_discuss": 0,
                "num": 35,
                "use_way": 1,
                "exit_country": "us",
                "qualification": "53",
                "images": "54",
                "video": null,
                "info": "54",
                "dead_time": "2020-01-21 10:32:32",//截止时间
                "service_id": null,
                "status": null,
                "files": null,
                "created_at": "2020-05-06 12:29:05",
                "updated_at": "2020-05-06 12:29:05",
                "product_category_cnname": "消杀用品及其主要原料、包装材料",
                "product_category_enname": "Killing products and their main raw materials and packaging materials",
                "product_brand_cnname": "北京同仁堂",
                "product_brand_enname": "Beijing Tongrentang"
            },
            {
                "id": 11,
                "user_id": 10,
                "type": 3,
                "title": "我要委托3xxxxxx",
                "desc": "描述fasdte",
                "cate_id": 3,
                "band_id": 1,
                "other_band": null,
                "price": 52,
                "market_price": 646.4,
                "supplier_price": 6436,
                "benefit_price": null,
                "is_discuss": 0,
                "num": 35,
                "use_way": 1,
                "exit_country": "us",
                "qualification": "53",
                "images": "54",
                "video": null,
                "info": "54",
                "dead_time": "2020-01-21 10:32:32",
                "service_id": null,
                "status": null,
                "files": null,
                "created_at": "2020-05-07 21:46:14",
                "updated_at": "2020-05-07 21:46:14",
                "product_category_cnname": "消杀用品及其主要原料、包装材料",
                "product_category_enname": "Killing products and their main raw materials and packaging materials",
                "product_brand_cnname": "北京同仁堂",
                "product_brand_enname": "Beijing Tongrentang"
            }
        ]


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
                
                let res =  await getMyNeeds({data:params});
                if(res.code!=200){
                    this.$message({
                      showClose: true,
                      message: res.message,
                      type: "error"
                    });
                }else{
                    let data = res.data;
                    this.total = data.total;
                    this.list = data.list.length?data.list:list;

                }
                
            }

        },
        created(){
            this.getNeeds();
            
        }

    }
</script>