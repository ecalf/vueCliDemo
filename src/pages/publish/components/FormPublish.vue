<template>
    <section ref="publishForm">
        <section class="commonweb container">
            <FormContainer  title="品类" v-bind:baseline="false">
                <!--
                <div class="form-section">
                    <SearchBar name="search" width="690" @update-value="updateValue" />
                </div>
                -->

               

                <div class="form-section category-menu-container">
                    <SelectCascade
                        name="category"
                        v-bind:list="categoryList"
                        v-bind:deep="2"
                        v-model="fieldData.category"
                        @update-value="updateValue"
                         />
                </div>
                <div class="form-section category-show">
                    <template v-for="(item,i) of fieldData.category">
                        <span >{{ item.text }}</span>
                        <i class="arrow-right" v-show="i<fieldData.category.length-1"></i>
                    </template>
                </div>
            </FormContainer>

            <FormContainer  title="发布信息" v-bind:baseline="true">

                <FormRow v-if="type==3||type==4">
                    <RadioGroupField
                        v-bind:required="true" 
                        v-bind:list="entrustGroup"
                        label="委托目的" 
                        name="entrust" 
                        height="40"
                        width="140"
                        v-model="fieldData.entrust"
                        @update-value="updateValue"
                        />
                </FormRow>

                <FormRow>
                    <InputField 
                        v-bind:required="true" 
                        v-bind:suffix="true"
                        v-bind:max-length="30"
                        placeholder="最多输入30个字符"
                        defaultvalue=""
                        type="text"
                        label="标题" 
                        name="title" 
                        width="1020"
                        height="40"
                        v-model="fieldData.title"
                        @update-value="updateValue"
                        />
                </FormRow>

                


                <FormRow>
                    <TextAreaField 
                        v-bind:required="true" 
                        v-bind:suffix="true"
                        v-bind:max-length="100"
                        placeholder="最多输入100个字符"
                        defaultvalue=""
                        label="描述" 
                        name="desc" 
                        width="1020"
                        height="100"
                        v-model="fieldData.desc"
                        @update-value="updateValue"
                        />
                </FormRow>

                <FormRow>
                    <DropListField
                        v-bind:required="true" 
                        v-bind:prefix="false"
                        v-bind:list="brandList" 
                        label="品牌" 
                        name="brand" 
                        height="40"
                        width="300"
                        defaulttext="请选择品牌"
                        v-model="fieldData.brand"
                        @update-value="updateValue"

                        />

                    <InputField 
                        v-bind:required="false" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="其他品牌" 
                        name="otherBrand" 
                        width="245"
                        height="40"
                        v-model="fieldData.otherBrand"
                        @update-value="updateValue"
                        />

                    <InputField 
                        v-bind:required="false" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="出口国" 
                        name="country" 
                        width="245"
                        height="40"
                        v-model="fieldData.country"
                        @update-value="updateValue"
                        />

                </FormRow>

                <FormRow>
                    <InputField 
                        v-if="type==2" 
                        v-bind:required="true" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="供应商价" 
                        name="supplierPrice" 
                        width="100"
                        height="40"
                        v-model="fieldData.supplierPrice"
                        @update-value="updateValue"
                        />

                    <InputField 
                        v-bind:required="true" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="市场价" 
                        name="price" 
                        width="100"
                        height="40"
                        v-model="fieldData.price"
                        @update-value="updateValue"
                        />

                    <InputField 
                        v-bind:required="true" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="数量" 
                        name="quantity" 
                        width="100"
                        height="40"
                        v-model="fieldData.quantity"
                        @update-value="updateValue"
                        />


                     <DropListField
                        v-bind:required="true" 
                        v-bind:prefix="false"
                        v-bind:list="unitList" 
                        label="单位" 
                        name="unit" 
                        height="40"
                        width="130"
                        defaulttext="请选择单位"
                        v-model="fieldData.unit"
                        @update-value="updateValue"
                        />


                    <CheckBoxGroupField
                        v-bind:required="true" 
                        v-bind:list="useGroup"
                        label="用途" 
                        name="usage" 
                        height="40"
                        width="140"
                        v-model="fieldData.usage"
                        @update-value="updateValue"
                        />

                </FormRow>


                <FormRow>
                    <!-- 多个 下来列表
                    <DropListGroup 
                        v-bind:required="true" 
                        v-bind:prefix="false"
                        v-bind:list="qualificationList"
                        label="资质要求"
                        name="qualification" 
                        height="40"
                        @update-value="updateValue"
                        />
                    -->

                    <!--单个下拉列表-->
                    <DropListField
                        v-bind:required="true" 
                        v-bind:prefix="true"
                        v-bind:list="qualificationList" 
                        label="资质要求" 
                        name="qualification" 
                        height="40"
                        width="300"
                        defaulttext="请选择资质要求"
                        v-model="fieldData.qualification"
                        @update-value="updateValue"
                        />

 
                </FormRow>

            </FormContainer>

            <FormContainer  title="图片信息" v-bind:baseline="true">
                <FormRow>
                    <FieldWrap
                        type="fileUploadGroup" 
                        label="上传图片"
                        v-bind:required="true" 
                        height="150"
                        >

                        <FileUploadImage 
                            title="增加技术参数图片" 
                            name="techImg" 
                            v-model="fieldData.techImg" 
                            @update-value="updateValue"
                            />
                        <FileUploadImage 
                            title="上传产品图" 
                            name="productImg" 
                            v-model="fieldData.productImg" 
                            @update-value="updateValue"
                            />
                        <FileUploadImage 
                            title="上传企业图" 
                            name="companyImg" 
                            v-model="fieldData.companyImg" 
                            @update-value="updateValue"
                            />
                        <FileUploadImage 
                            title="其他" 
                            name="otherImg" 
                            v-model="fieldData.otherImg" 
                            @update-value="updateValue"
                            />

                    </FieldWrap>
                </FormRow>  

         
               <!--
                <FormRow>
                    <FieldWrap 
                        type="fileUploadGroup" 
                        label="上传视频"
                        v-bind:required="false" 
                        height="150"
                        >

                        <FileUploadVideo title="选择视频" name="video" @update-value="updateValue" />
                        

                    </FieldWrap>
                </FormRow> 
                -->
      


                <FormRow>
                    <FieldWrap 
                        type="editor"
                        label="电脑端描述"
                        v-bind:required="true" 
                        v-bind:border="0"
                        height="400"
                        >

                        <Editor 
                            name="richDesc" 
                            defaultcontent="" 
                            @update-value="updateValue" 
                            v-model="fieldData.richDesc"
                            />
                        

                    </FieldWrap>
                </FormRow>


                <FormRow>
                    <DatePickerField 
                        v-bind:required="true" 
                        v-bind:suffix="false"
                        v-bind:prefix="false"
                        v-bind:list="serviceGroup"
                        label="截止日期" 
                        name="deadtime" 
                        valueFormat="yyyy-MM-dd"
                        height="40"
                        width="220"
                        v-model="fieldData.deadtime"
                        @update-value="updateValue"
                        />

                </FormRow>


                <FormRow>

                    <CheckBoxGroupField
                        v-bind:required="false" 
                        v-bind:list="serviceGroup"
                        label="增值服务" 
                        name="service" 
                        height="40"
                        width="230"
                        v-model="fieldData.service"
                        @update-value="updateValue"
                        />

                    <span class="service-tip">*使用增值服务排名更靠前</span>
                </FormRow>

                

                

            </FormContainer>
        </section>

        <SubmitBar text="立即发布" @on-submit="publish" />
        <PaymentMethod 
            v-bind:title="payment.title" 
            v-bind:visible="payment.visible" 
            @trigger="showPaymentDialog" 
            @on-pay="onPay"  
            />
    </section>
</template>


<style lang="scss" scoped>
    .container{
        margin-bottom: 220px;
    }

    .form-section{
        display: flex;
        justify-content: flex-start;
        margin-top:20px;
    }

    .category-menu-container{
        margin-left:115px;
    }

    .category-show{
        align-items: center;
        margin-left:115px;
        font-size: 16px;
        font-weight: bold;
        height: 26px;
        line-height: 26px;
        color:$green;

        .arrow-right{
            margin:0 5px;
            display: inline-block;
            width:10px;
            height:10px;
            background-image: url(~@assets/images/icon/arrow-right.png);
        }

    }

    


    .service-tip{
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;
        color: $fontColor;
    }

</style>

<script>
import FormContainer from "@components/form/FormContainer";
import SearchBar from "@components/form/SearchBar";
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import TextAreaField from "@components/form/TextAreaField";
import CheckBoxGroupField from "@components/form/CheckBoxGroupField";
import RadioGroupField from "@components/form/RadioGroupField";
import DropListField from "@components/form/DropListField";
import DropListGroup from "@components/form/DropListGroup";
import FileUploadImage from  "@components/form/FileUploadImage";
import FileUploadVideo from  "@components/form/FileUploadVideo";
import Editor from  "@components/form/Editor";
import DatePickerField from  "@components/form/DatePickerField";
import SelectCascade from "@components/form/SelectCascade";
import SubmitBar from  "./SubmitBar";
import PaymentMethod from "@components/PaymentMethod";

import { payService,getOrderStatus } from "@api/payment";
import { publish,getNeedInfo,editNeed } from "@api/need";
import {
    getQualification,
    getProductCategory,
    getBrandList,
    getUnitList
} from "@api/common";


import { checkform } from "./CheckForm";
import { formatListData,findItemByKey } from "@utils/common";



export default {
    components:{
        SubmitBar,
        FormContainer,
        SearchBar,
        SelectCascade,
        FormRow,
        FieldWrap,
        InputField,
        TextAreaField,
        CheckBoxGroupField,
        RadioGroupField,
        DropListField,
        DropListGroup,
        FileUploadImage,
        FileUploadVideo,
        Editor,
        DatePickerField,
        PaymentMethod
    },
    props:{
        //1 发布采购, 2 发布销售, 3 委托销售, 4 委托采购 
        //此处type传入 1\2\3，委托类型在表单选择
        type:Number,
        id:Number //需求ID，编辑时使用
    },

    data(){
        return{
            //组件初始化数据
            brandList:[],
            categoryList:[],
            qualificationList:[],
            unitList:[],
            entrustGroup:[
                //3 委托销售 4 委托采购
                {text:'销售',id:3,checked:this.type==3||this.type==undefined},
                {text:'采购',id:4,checked:this.type==4}
            ],
            useGroup:[
                {text:'医用',id:1,checked:true},
                {text:'民用',id:2}
            ],
            serviceGroup:[
                {
                    text:'加入VIP',
                    id:1,
                    addition:{
                        emphasize:true,//着重强调
                        tip:'加入VIP排名更靠前 ￥20'//鼠标提示信息
                    }
                },
                {text:'置顶',id:2,checked:true},
                {text:'加急',id:3}
            ],

            
            //表单值
            fieldData:{
                imageKeys:'techImg,productImg,companyImg,otherImg',
                type:this.type,
                category:'', //产品类别
                entrust:'',//委托类型,仅委托表单可用
                title:'',//标题
                desc:'',//描述
                brand:'',//品牌选择
                otherBrand:'',//其他品牌,非必选
                country:'',//出口国,非必填
                supplierPrice:'',//供应商价格,仅发布销售可用
                price:'',//市场价
                quantity:'',//数量
                unit:'',//单位
                usage:'',//用途
                qualification:'',//认证
                techImg:'',//上传图片-技术
                productImg:'',//上传图片-产品
                companyImg:'',//上传图片-企业
                otherImg:'',//上传图片-其他
                video:'',//上传视频
                richDesc:'',//富文本描述
                deadtime:'',//截止时间
                service:''//增值服务,非必须选
            },
            payment:{//支付借口参数
                title:'增值服务费-支付方式',
                visible:false,
                needs_id:0,
                service_id:0,
                channel_code:''
            }
        }
    },
    
    methods:{
        showPaymentDialog(frag){
            if(frag===undefined){
                this.payment.visible = !this.payment.visible;
            }else{
                this.payment.visible = !!frag;    
            }
            
        },
        onPay(channal){
            this.payService(this.payment.needs_id,this.payment.service_id,channal.channel_code);
        },
        async payService(needs_id,service_id,pay_channel_code){
            pay_channel_code = "alipay";
            needs_id = "57";
            service_id =  "2";

            if(!(needs_id&&service_id)){
                return false;
            }

            const res = await payService({
                data:{
                    needs_id:needs_id,
                    service_id:service_id,
                    pay_channel_code:pay_channel_code
                }
            });

            if(res.code==200){
                //console.log('payService res>>>',res);
                if(pay_channel_code=='alipay'){
                    this.alipay(res.data);
                }else if(pay_channel_code=='wxpay'){
                    this.wxpay(res.data);
                }

            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
            }

        },

        alipay(payInfo){
            window.open(payInfo.payurl+'?order_no='+payInfo.order_no,'');
            this.getOrderStatus(payInfo.order_no);
        },
        wxpay(payInfo){
            console.log('wxpay:',payInfo);
        },
        async getOrderStatus(order_no){
            let timer;
            let retry = false;
            let tryTimes = 5;
            let timeCtrl = 1000*30;

            let fn = async ()=>{
                const res = await getOrderStatus({data:{order_no:order_no}});
                
                if(res.code==200){
                    let order_status = res.data.order_status;
                    let stateText = ['','待支付','支付成功','支付失败'][order_status];
                    if(order_status==2||order_status==3){
                        retry = false;
                        this.$message({
                            showClose:true,
                            message:stateText
                        });
                    }else if(order_status==1){
                        retry = true;
                    }
                    
                }else{
                    retry = true;
                }

                if(retry&&tryTimes>0){
                    tryTimes-=1;
                    timer = setTimeout(fn,timeCtrl);
                }
            };


            timer = setTimeout(fn,timeCtrl);
            

        },

        updateValue(name,value){
            console.log('[publish form updateValue]:',name,value);
            this.fieldData[name] = value;

            if(name=="category"){//选择品类，更新品牌选择列表
                this.getBrandList();
            }

        },
        async renderInfo(info){
            if(this.type!=info.type){
                console.log('编辑的信息类型与表单类型不符','表单类型:',this.type,'，信息类型:',info.type);
                return false;
            }

            console.log('======renderInfo=====');
            this.fieldData.id = info.id*1;
            this.fieldData.type = info.type;
            this.fieldData.title = info.title;
            this.fieldData.desc = info.desc;
            this.fieldData.richDesc = info.info;
            this.fieldData.country = info.exit_country;
            this.fieldData.otherBrand = info.other_brand;
            this.fieldData.price = info.price;
            this.fieldData.supplierPrice = info.supplier_price;
            this.fieldData.quantity = info.num;
            this.fieldData.deadtime = new Date(info.dead_time);


            let images = info.images.split(',');
            let imageKeys = this.fieldData.imageKeys.split(',');
            imageKeys.forEach((key,i)=>{
                 this.fieldData[key] = images[i]||'';
            });

            /*
            console.log('==========test category==============');
            info.cate_id = 10;
            */

            this.fieldData.category = findItemByKey('id',info.cate_id*1,this.categoryList,true);
            await this.getBrandList();

            this.fieldData.unit = findItemByKey('id',info.unit_cate_id*1,this.unitList);
            this.fieldData.usage = info.use_way.split(',').map((id)=>{
                return findItemByKey('id',id*1,this.useGroup);
            });
            this.fieldData.service = info.service_id.split(',').map((id)=>{
                return findItemByKey('id',id*1,this.serviceGroup);
            });
            this.fieldData.entrust = findItemByKey('id',info.type*1,this.entrustGroup);
            
            //console.log('======test info.brand_id =======');
            //info.brand_id = 8;
            this.fieldData.brand = findItemByKey('id',info.brand_id*1,this.brandList);
            //console.log('this.fieldData.brand:',info.brand_id,this.brandList, this.fieldData.brand);

            this.fieldData.qualification = findItemByKey('id',info.qualification*1,this.qualificationList);


            console.log('fieldData>>>',this.fieldData);


        },
        checkform(){
            /*
            //test
            let pageType = this.type;
            let entrustId = fieldData.entrust&&fieldData.entrust.id;
            console.log('checkedForm fieldData ',fieldData);
            console.log('页面类型:',pageType);
            console.log('委托类型:',entrustId,' ,fieldData.entrust：',fieldData.entrust);
            console.log('表单类型:',entrustId||pageType,',computed:',fieldData.entrust&&fieldData.entrust.id||this.type);
            */

            let info = checkform(this.fieldData);
            if(info.state){
                return info.params;
            }else{
                this.$message({
                    showClose: true,
                    message: info.errMsg,
                    type: "error"
                });

                return false;
            }


        },

        async publish(){
            const params = this.checkform();
            if(!params){ return false; }

            let res;
            if(this.fieldData.id){//编辑
                params.id = this.fieldData.id;
                res = await editNeed({data:params});
            }else{
                res = await publish({data:params});
            }

            if(res.code==200){
                if(params.service_id&&res.data.needs_id){
                    this.payment.service_id = params.service_id;
                    this.payment.needs_id = res.data.needs_id;
                    this.showPaymentDialog(true);
                    
                }else{
                    this.$message({
                        showClose: true,
                        message: res.message,
                        type: "success"
                    });
                }
            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
            }

        },


        
        async getQualification(){
            let res =  await getQualification();

            if(res.code==200){
              this.qualificationList = formatListData(res.data);

            }else{
              this.$message({
                showClose: true,
                message: res.message,
                type: "error"
              });
          }
        },

        async getProductCategory(){
            let res = await getProductCategory();


            if(res.code==200){
                this.categoryList = formatListData(res.data);
            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
            }
        },
        async getBrandList(){
            let cate = [].concat(this.fieldData['category']).slice(-1)[0];
            if(!cate){ return false;  }


            console.log('await getBrandList begin');
            let res = await getBrandList({
                    data:{
                        cate_id:cate.id
                    }
                });
            console.log('await getBrandList finish');
            if(res.code==200){
                this.brandList = formatListData(res.data);

            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
            }
        },
        
        async getUnitList(){
            let res = await getUnitList();
            if(res.code==200){
                this.unitList = formatListData(res.data);

            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"
                });
            }
        },

        async getNeedInfo(){
            if(!this.id*1){
                return false;
            }

            const res = await getNeedInfo({data:{needs_id:this.id}});
            if(res.code==200){
                this.renderInfo(res.data);
            }else{
                this.$message({
                    showClose:true,
                    message:res.message,
                    type:"error"
                });
            }

        }

    },
    async created(){
        await this.getProductCategory();
        await this.getQualification();
        await this.getUnitList();
        if(this.id){
            this.getNeedInfo();
        }

        console.log('publishForm>>>',this.$refs.publishForm);
        window.publishForm = this.$refs.publishForm;
        window.com = this;
    },
    updated(){
        console.log('updated, fieldData>>>',this.fieldData);
    }

}
</script>
