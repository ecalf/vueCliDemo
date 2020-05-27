<template>
<div class="mb50">
    <!--banner-->
    <div class="commonweb banner-wrap">
        <Banner :bannerList="bannerList" />
    </div>
    <div class="commonweb">
        <div class="company-profile">
            <div class="company-img-wrap">
                <img v-bind:src="info.company_images" class="company-img">
            </div>

            <div class="company-info-wrap">
                <div class="prodInfo company-info">
                    <h4 class="deatils-title">
                        企业简介
                        <span class="sub-title">Company profile</span>
                        <span class="bussness-code">
                            组织结构代码:{{info.business_license_code}}
                        </span>
                    </h4>
                    <div class="deatils-content">
                        {{ info.company_introduce }}
                    </div>
                    <div class="company-label-wrap">
                        <span class="company-label">企业主营：{{info.business_scope_cate}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="prodInfo">
            <h4 class="deatils-title">
                企业简介
                <span class="sub-title">Company profile</span>
                <ul class="need-type-switch">
                    <li class="item" v-bind:class="{active:type==1}" @click="switchType(1)">采购订单</li>
                    <li class="item" v-bind:class="{active:type==2}" @click="switchType(2)">销售订单</li>
                    <li class="item" v-bind:class="{active:type==3}" @click="switchType(3)">委托订单</li>
                </ul>
            </h4>

            <div class="deatils-content">
                <!--订单-->
                <OrderList v-bind:list="list" v-if="total>0" />
                <Errormsg v-if="total==0" />

                <!--分页 -->
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
            
        </div>

        <div class="prodInfo">
            <h4 class="deatils-title">
                企业资质
                <span class="sub-title">Company qualification</span>
            </h4>

            <div class="deatils-content">
                <ul class="img-list">
                    <li class="img-list-item" v-for="src of qualifications">
                        <img v-bind:src="src" alt="" />
                    </li>
                   
                </ul>
            </div>
        </div>


        <div class="prodInfo">
            <h4 class="deatils-title">
                联系我们
                <span class="sub-title">Company contact</span>
            </h4>


            <div class="deatils-content">
                <div class="company-contact">
                    <span>联系人：{{info.contact_name||''}}</span>
                </div>
                <div class="company-contact">
                    <span>电话：{{info.contact_phone||''}}</span>
                    <span>QQ：{{info.qq||''}}</span>
                    <span>微信：{{info.wechat||''}}</span>
                    <span>邮箱：{{info.email||''}}</span>
                </div>
                <div class="company-contact">
                    <span>地址：{{info.addr||''}}</span>
                </div>
            </div>

        </div>



    </div>
</div>

</template>


<style lang="scss" scoped>
.banner-wrap{
    margin-bottom: 40px;
}

.company-profile{
    display: flex;  
    align-items: flex-start;
    justify-content: flex-start;  

    .company-img-wrap{
        width:300px;
        height: 300px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .company-img{
            max-width: 300px;
            max-height: 300px;
        }
    }
    .company-info-wrap{
        padding-top:20px;
        padding-left:20px;
        flex: 1;

        .company-info{
            height: 280px;
        }
    }
}

.prodInfo{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    .deatils-title {
        display: flex;
        align-items: baseline;
        color: $ac;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 18px;
        span {
            font-weight: normal;
            font-size: 18px;
            margin-left: 20px;
         }
         .sub-title{
            flex:1;
         }

         .need-type-switch{
            display: flex;
            align-items: baseline;
            .item{
                margin-left:25px;
                font-size: 18px;
                font-weight: lighter;
                color:$fontColor;
                cursor:default;

                &.active{
                    font-size: 24px;
                    font-weight: 700;
                    color:$ac;
                }
            }
         }
       
    }
    .deatils-content {
        flex:1;

        img {
            max-width: 100%;
          }
    }
    .company-label-wrap{
        .company-label{
            display: inline-block;
            line-height: 28px;
            font-size: 12px;
            padding:0 10px;
            margin-right: 10px;
            background-color: $ac;
            color:$bgwhite;
            
            @include default-radius;
        }
    }

    .img-list{
        display:flex;

        li{
            margin-right: 20px;

            &:last-child{
                margin-right: 0;    
            }
        }
    }

    .company-contact{
        margin-bottom: 10px;
        span{
            margin-right: 40px;
        }

        &:last-child{
            margin-bottom: 150px;
        }
    }
}


</style>

<script>
    import Banner from "@components/Banner";
    import OrderList from "@components/OrderList";
    import Pagination from "@components/Pagination";
    import Errormsg from "@components/Errormsg";

    import { getUserInfo } from "@api/user";
    import { getNeedList } from "@api/need";

    export default {
        components:{
            Banner,
            OrderList,
            Pagination,
            Errormsg
        },
        props:{
            id:String//产品发布者 user_id
        },
        data(){
            return {
                info:{},
                total:0,
                page_size:5,
                page_index:1,
                type:1,//1 采购,2 销售,3 委托销售, 4 委托采购
                list:[]
            }
        },
        computed:{
            bannerList(){
                let images = this.info.company_transparency?this.info.company_transparency.split(','):[];
                
                console.log('test images banner');
                images = [
                    'http://pic.90sjimg.com/design/00/37/59/73/d88d5422884f00b2d9c47e71cce48be0.jpg',
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2824904003,987247610&fm=11&gp=0.jpg',
                    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696244676,3361057726&fm=26&gp=0.jpg'
                ]

                return images.map((url)=>{
                    return {
                        imgUrl:url,
                        href:''
                    }
                });
            },
            qualifications(){
                return this.info.qualifications&&this.info.qualifications.split(',')||[];
            }
        },
        methods:{
            switchPage(page_index){
                this.page_index = page_index*1;
                this.getNeeds();
            },
            switchType(type){
                this.type = type*1;
                this.page_index = 1;
                this.getNeeds();
            },

            async getUserInfo(){
                const res = await getUserInfo({data:{user_id:this.id*1}});
                if(res.code==200){
                    this.info = res.data.profiles.user_company;
                }else{
                    this.$message({
                        showClose:true,
                        message:'企业信息获取失败',
                        type:"error"
                    });
                }
            },

            async getNeeds(){
                let params = {
                    user_id:this.info.user_id,
                    page_size:this.page_size,
                    page_index:this.page_index,
                    type:this.type 
                }
                

                let res = await getNeedList({data:params});
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
        },
        async created(){
            await this.getUserInfo();
            await this.getNeeds();

        }
    }

</script>