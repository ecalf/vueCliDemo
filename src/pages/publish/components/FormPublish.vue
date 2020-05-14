<template>
    <section>
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
                        @update-value="updateValue" />
                </div>
                <div class="form-section category-show">
                    <template v-for="(item,i) of fieldData.category">
                        <span >{{ item.text }}</span>
                        <i class="arrow-right" v-show="i<fieldData.category.length-1"></i>
                    </template>
                </div>
            </FormContainer>

            <FormContainer  title="发布信息" v-bind:baseline="true">

                <FormRow v-if="type==3">
                    <RadioGroupField
                        v-bind:required="true" 
                        v-bind:list="entrustGroup"
                        label="委托目的" 
                        name="entrust" 
                        height="40"
                        width="140"
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
                        @update-value="updateValue"
                        />
                </FormRow>

                <FormRow>
                    <DropListField
                        v-bind:required="true" 
                        v-bind:prefix="true"
                        v-bind:list="brandList" 
                        label="品牌" 
                        name="brand" 
                        height="40"
                        width="300"
                        defaulttext="请选择品牌"
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
                        @update-value="updateValue"
                        />


                    <CheckBoxGroupField
                        v-bind:required="true" 
                        v-bind:list="useGroup"
                        label="用途" 
                        name="usage" 
                        height="40"
                        width="140"
                        @update-value="updateValue"
                        />

                </FormRow>


                <FormRow>
                    <DropListGroup 
                        v-bind:required="false" 
                        v-bind:prefix="true"
                        v-bind:list="qualificationList"
                        label="资质要求"
                        name="qualification" 
                        height="40"
                        @update-value="updateValue"
                        />
 
                </FormRow>

            </FormContainer>

            <FormContainer  title="图片信息" v-bind:baseline="true">
                <FormRow>
                    <FieldWrap 
                        type="fileUploadGroup" 
                        v-bind:label="'上传图片'"
                        v-bind:required="true" 
                        height="150"
                        >

                        <FileUploadImage title="增加技术参数图片" name="techImg" @update-value="updateValue"/>
                        <FileUploadImage title="上传产品图" name="productImg" @update-value="updateValue"/>
                        <FileUploadImage title="上传企业图" name="companyImg" @update-value="updateValue"/>
                        <FileUploadImage title="其他" name="otherImg" @update-value="updateValue"/>

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
                        height="400"
                        >

                        <Editor name="richDesc" defaultcontent="" @update-value="updateValue" />
                        

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
                        height="40"
                        width="230"
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
                        @update-value="updateValue"
                        />

                    <span class="service-tip">*使用增值服务排名更靠前</span>
                </FormRow>

                

                

            </FormContainer>
        </section>

        <SubmitBar text="立即发布" @on-submit="publish" />
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

import { payService } from "@api/payment";
import { publish } from "@api/publish";
import {
    getQualification,
    getProductCategory,
    getBrandList,
    getUnitList
} from "@api/common";


import { dateTimeFormat } from '@utils/common';
import { checkform } from "./CheckForm";


function formatListData(listData){
    if(!(listData instanceof Array)){
        console.log('formatListData error,param listData is not an array');
        return [];
    }

    listData = listData.map(function(item){
        item.id = item.id||item.value||'';
        item.text = item.cn_name;//todo：按中英文选择cn_name en_name
        item.icon = item.icon||item.img||'';

        if(item.child&&item.child.length){
            item.child = formatListData(item.child);
        }

        return item;
    });

    return listData;
}



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
        DatePickerField
    },
    props:{
        //1 发布采购, 2 发布销售, 3 委托销售, 4 委托采购 
        //此处值传入 1\2\3，委托类型在表单选择
        type:Number 
    },

    data(){
        return{
            //组件初始化数据
            brandList:[],
            categoryList:[],
            qualificationList:[],
            unitList:[],


           /* //test data
            dropList:[//todo:fetch list data
                {text:'认证1',id:1,icon:"../../assets/images/inicon11.png"},
                {text:'认证2',id:2,icon:"../../assets/images/inicon12.png"},
                {text:'认证3',id:3,icon:"../../assets/images/inicon13.png"}
            ],
            */

           /* unitList:[
                {text:'个',id:1},
                {text:'箱',id:2},
                {text:'吨',id:3},
            ],*/
            entrustGroup:[
                //3 委托销售 4 委托采购
                {text:'销售',id:3,checked:true},
                {text:'采购',id:4}
            ],
            useGroup:[
                {text:'医用',id:1,checked:true},
                {text:'民用',id:2}
            ],
            serviceGroup:[
                {text:'加入VIP',id:1,addition:{style:{ color:'#44A78D' }}},
                {text:'置顶',id:2},
                {text:'加急',id:3}
            ],

            //表单值
            fieldData:{
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
            }
        }
    },
    
    methods:{
        updateValue(name,value){
            console.log('【publish form updateValue】',name,value);

            this.fieldData[name] = value;

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

            let info = checkform(this.fieldData,this.type);
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

            console.log('publish params ',params);
            const res = await publish({data:params});
            console.log('publish res ',res);

            if(res.code==200){
                if(params.service_id&&res.data.needs_id){
                    this.payService(res.data.needs_id);
                }
            }else{
                this.$message({
                    showClose: true,
                    message: res.data.message,
                    type: "error"
                });
            }

        },

        async payService(needs_id){
            const res = await payService({data:{needs_id:needs_id}});

            if(res.code==200){
               
            }else{
                this.$message({
                    showClose: true,
                    message: res.data.message,
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
            let res = await getBrandList({
                    data:{
                        cate_id:3//this.this.params.cate_id
                    }
                });

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

    },
    created(){
        this.getQualification();
        this.getProductCategory();
        this.getBrandList();
        this.getUnitList();

    }

}
</script>
