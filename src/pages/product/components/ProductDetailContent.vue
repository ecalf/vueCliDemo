<template>
    
      <div class="prodetatils-conetent">
        <h1 class="prodetail-title">
          {{ detail.title }}
        </h1>
        <p class="prodetail-dec">{{detail.desc}}</p>

        <div class="prodetail-price">
          <span class="new-price">
            {{detail.type==2?'供应商价格':'市场价'}}
            <i>￥</i>
            <strong>
                {{(detail.type==2?detail.supplier_price:detail.price)|formatPrice}}
            </strong>
          </span>

          <span class="old-price" v-if="detail.type==2">
            市场价
            <i>￥</i>
            <em>{{detail.price|formatPrice}}</em>
          </span>
        </div>
        <div class="prodetail-other">
          <span class="authent">
            认证：
            <img v-for="(item,index) in list" :key="index" :src="item" alt />
            <!-- <img src="@assets/images/inicon11.png" alt />
            <img src="@assets/images/inicon12.png" alt /> -->
          </span>
          <span>品牌：{{detail.product_brand_cnname||detail.other_brand}}</span>
          <span>应用类型：{{detail.use_way|useWay}}</span>
          <span>出口国：{{country(detail.exit_country)}}</span>
        </div>
        <div class="prodetail-num">
            <span>
                {{(detail.type==2||detail.type==4)?'库存':'求购'}}
                <i>{{detail.num}}</i>
                {{detail.unit_category_cnname}}
            </span>
          <span>{{detail.created_at|formatDate}}-{{detail.dead_time|formatDate}}</span>
        </div>

        <div class="prodetail-btn" v-if="isshow">
          <el-button type="text" @click="showContactDialog(true)">立即联系</el-button>

          <!--商家发布销售，客户可报价 -->
          <el-button type="text" @click="showQuotationDialog(true)" v-if="detail.type==1">立即报价</el-button>
        </div>



        <DialogContact
          v-bind:visible="contactVisible" 
          @trigger="showContactDialog" 
          v-bind:info="{
              contact_name: detail.contact_name,
              contact_phone: detail.contact_phone,
              addr:detail.addr
            }" 
          />

        <DialogQuotation
            v-if="detail.type==1"
            v-bind:visible="quotationVisible"
            v-bind:id="detail.id"
            v-bind:info="{
              id:detail.id,
              category_name:detail.product_category_cnname,
              title:detail.title,
              use_way:detail.use_way
            }"
            
            @trigger="showQuotationDialog" 
            />

      </div>

</template>


<style lang="scss" scoped>
.prodetatils-conetent {
  overflow: hidden;
  padding: 20px 0 0;
  color: #4e5a65;
}
.prodetail-title {
  font-size: 18px;
  color: #3d3938;
  font-weight: bold;
  margin: 0 0 15px;
  .highcolor {
    font-style: normal;
    color: $ac;
  }
}

.prodetail-dec {
  margin-bottom: 25px;
}
.prodetail-price {
  padding: 7px 20px;
  background-color: #eaeced;

  i,
  strong,
  em {
    vertical-align: middle;
    font-style: normal;
  }
  .new-price {
    padding-right: 24px;

    i {
      font-size: 20px;
      color: $ac;
    }
    strong {
      font-size: 37px;
      color: $ac;
    }
  }
  .old-price {
    i {
      font-size: 12px;
    }
    em {
      text-decoration: line-through;
    }
  }
}

.prodetail-other {
  padding: 30px 0 10px;
  span {
    padding-right: 30px;
    vertical-align: middle;
    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
}

.prodetail-num {
  input {
    width: 57px;
    height: 25px;
    border-radius: 3px;
    border: solid 1px #a6acb1;
    margin: 0 5px 0 3px;
    padding-left: 2px;
  }
  span {
    padding-right: 20px;
    font-size: 12px;
  }
  i{
    font-size: 20px;
    color: $green;
    font-style: normal;
  }
}
.prodetail-btn {
  padding-top: 37px;
  button,
  a {
    display: inline-block;
    width: 180px;
    height: 50px;
    border-radius: 3px;
    border: solid 1px #44a78d;
    margin-right: 10px;
    font-size: 18px;
    text-align: center;
    background: rgba(68, 167, 141, 0.2);
    transition: all 0.3s;
    color: $ac;
    &:hover {
      background: $ac;
      color: #fff;
    }
  }
}
</style>


<script>
    import DialogQuotation from "./DialogQuotation";
    import DialogContact from "./DialogContact";
    import { getCountrylist } from "@api/common";
    import { formatPrice,dateTimeFormat } from "@utils/common";
    import filters from "@utils/filters";


    export default {
        mixins:[filters],
        components:{
            DialogQuotation,
            DialogContact
        },
        props:{
            detail:Object,
            list:Array,
            isshow:Boolean,
        },
        data(){
            return {
                contactVisible: false,
                quotationVisible: false,
                countryList:[]
            }
        },
        computed:{
            formatTitle(){
                //filters 只能用于 v-bind 和 插值，用 computed实现
                return (text)=>{
                    if(!text){ return ''; }

                    return (text+'').replace(/医用|民用/g,function(m){
                        return '<i class="highcolor">'+m+'</i>';
                    });
                }
            },
            country(){//filters 不能访问 this，用computed实现
              return (code)=>{
                if(!code){ return ''; }

                code = code.toUpperCase();
                let country = this.countryList.filter((item)=>{
                    return item.code==code;
                });
                return country.length?country[0].name:code
              }
            }
            
        },
        filters:{
            

        },
        methods:{
            showContactDialog(frag){
                this.contactVisible = !!frag;
            },
            showQuotationDialog(frag){
                this.quotationVisible = !!frag;
            },
            async getCountrylist(){
                let res =  await getCountrylist();

                if(res.code==200){
                  this.countryList = res.data;
                }else{
                  this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                  });
                }
            }
        },
        created(){
            this.getCountrylist();
        }
    }
</script>