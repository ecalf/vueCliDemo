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

import {publish} from "@api/publish";
import {
    getQualification,
    getProductCategory,
    getBrandList,
    getUnitList
} from "@api/common";

import { dateTimeFormat } from '@utils/common';

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
        checkedForm(){
            let errMsg = '';
            let fieldData = this.fieldData;

            /*
            //test
            let pageType = this.type;
            let entrustId = fieldData.entrust&&fieldData.entrust.id;
            console.log('checkedForm fieldData ',fieldData);
            console.log('页面类型:',pageType);
            console.log('委托类型:',entrustId,' ,fieldData.entrust：',fieldData.entrust);
            console.log('表单类型:',entrustId||pageType,',computed:',fieldData.entrust&&fieldData.entrust.id||this.type);
            */

            const params = {};
            const paramsConfig = {
                type:{
                    label:fieldData.entrust?'委托类型':'发布类型',
                    remark:'发布类型 required, 1 发布采购 2 发布销售 3 委托销售 4 委托采购  ',
                    required:true,
                    type:Number,
                    value:()=>{//使用箭头写法让 value 方法内可以通过 this 访问组件
                        return fieldData.entrust&&fieldData.entrust.id||this.type;
                    }    
                },
                cate_id:{
                    label:'品类',
                    remark:'品类id',
                    required:true,
                    type:Number,
                    value:()=>{
                        return fieldData.category[fieldData.category.length-1].id;
                    }
                },
                title:{
                    label:'标题',
                    remark:'标题,String',
                    required:true,
                    type:String,
                    value:fieldData.title
                },
                desc:{
                    label:'描述',
                    remark:'描述',
                    required:true,
                    type:String,
                    value:fieldData.desc
                },
                
                
                use_way:{
                    label:'用途',
                    remark:"用途id， 1 医用 2 民用,选中多个id用逗号隔开",
                    required:true,
                    type:String,
                    value:()=>{
                        return fieldData.usage.map((item)=>{
                            return item.id;
                        }).join();
                    }
                },
                exit_country:{
                    label:'出口国家',
                    remark:'出口国家 销售可出口国/采购进口国',
                    required:false,
                    type:String,
                    value:fieldData.country
                },

                
                
                brand_id:{
                    label:'品牌',
                    remark:'选择的品牌ID',
                    required:true,
                    type:Number,
                    value:()=>{
                        return fieldData.brand.id;
                    }
                },
                other_brand:{
                    label:'其他品牌',
                    remark:'输入的其他品牌名称',
                    required:false,
                    type:String,
                    value:fieldData.otherBrand
                },
                price:{
                    label:'市场价',
                    remark:'发布销售/发布采购/委托采购/委托销售 市场价',
                    required:true,
                    type:Number,
                    value:fieldData.price
                },
                supplier_price:{
                    label:'供应商价',
                    remark:'供应商价，仅用于 发布销售',
                    required:this.type==2,
                    type:Number,
                    value:fieldData.supplierPrice
                },
                num:{
                    label:'数量',
                    remark:'销售或采购的数量',
                    required:true,
                    type:Number,
                    value:fieldData.quantity
                },
                unit_cate_id:{
                    label:'单位',
                    remark:'单位id',
                    required:true,
                    type:Number,
                    value:()=>{
                        return fieldData.unit.id;
                    }
                },
                qualification:{
                    label:"资质要求",
                    remark:'产品的相关认证种类id,多个认证种类用id逗号隔开',
                    required:true,
                    type:String,
                    value:()=>{
                        return fieldData.qualification.map((item)=>{
                            return item.id;
                        }).join();
                    }
                },
               
                images:{
                    label:'图片信息',
                    remark:'上传的图片,技术、产品、企业、其他，多张图片路劲逗号隔开',
                    required:true,
                    type:String,
                    value:()=>{
                        return [fieldData.techImg,fieldData.productImg,fieldData.companyImg,fieldData.otherImg].join(',')
                    }
                },
                info:{
                    label:"电脑端描述",
                    remark:"用于PC端的富文本描述",
                    required:true,
                    type:String,
                    value:fieldData.richDesc
                },

                dead_time:{
                    label:'截止时间',
                    remark:'该发布消息有效的截止时间,年/月/日',
                    required:true,
                    type:String,
                    value:()=>{
                        return fieldData.deadtime?dateTimeFormat(fieldData.deadtime,'%y-%m-%d'):'';
                    }
                },
                service_id:{
                    label:'增值服务',
                    remark:'选择的增值服务id,多个id用逗号隔开',
                    required:false,
                    type:String,
                    value:()=>{
                        return fieldData.service.map((item)=>{
                            return item.id;
                        }).join()
                    }
                }
            }



            for(let key of Object.keys(paramsConfig)){
                let required = paramsConfig[key].required;
                let label = paramsConfig[key].label;
                let value = paramsConfig[key].value;
                let dataType = paramsConfig[key].type;

                if(typeof(value)=='function'){
                    try{
                        value = value();
                    }catch(error){ 
                        value = new dataType().valueOf();
                    }
                }

                if(required&&!value){
                    console.log(label,'required ',required,value);
                    errMsg = label+'必须填写';
                    break;
                }

                params[key] = value;
            }

            if(errMsg){
                this.$message({
                    showClose: true,
                    message: errMsg,
                    type: "error"
                });

                return false;
            }else{
                return params;
            }
        },

        async publish(){
            const params = this.checkedForm();
            if(!params){ return false; }

            console.log('publish params ',params);
            const res = await publish({data:params});
            console.log('publish res ',res);

            if(res.code==200){
                if(params.service_id){
                    this.pay();
                }
            }else{

            }

        },

        async pay(){

            console.log('pay');
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
