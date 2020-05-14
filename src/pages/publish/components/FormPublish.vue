<template>
    <section>
        <section class="commonweb container">
            <FormContainer  title="品类" v-bind:baseline="false">
                <!--
                <div class="form-section">
                    <SearchBar width="690" />
                </div>
                -->

                <div class="form-section">
                    <SelectCascade
                        name="category"
                        v-bind:list="categoryList"
                        v-bind:deep="2"
                        @update-value="updateValue" />
                </div>
            </FormContainer>

            <FormContainer  title="发布信息" v-bind:baseline="true">
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
                        name="content" 
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
                        v-bind:required="true" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="出口国" 
                        name="cuntry" 
                        width="245"
                        height="40"
                        @update-value="updateValue"
                        />

                </FormRow>

                <FormRow>
                    <InputField 
                        v-bind:required="true" 
                        v-bind:suffix="false"
                        placeholder=""
                        defaultvalue=""

                        type="text"
                        label="供应商价" 
                        name="originPrice" 
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
                        name="marketPrice" 
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


                    <CheckBoxField
                        v-bind:required="false" 
                        v-bind:suffix="false"
                        v-bind:prefix="false"
                        v-bind:list="useGroup"
                        label="用途" 
                        name="use" 
                        height="40"
                        width="140"
                        @update-value="updateValue"
                        />

                </FormRow>


                <FormRow>
                    <FieldWrap 
                        type="dropListGroup" 
                        v-bind:label="'资质要求'"
                        v-bind:required="false" 
                        height="40"
                        >
                            <div v-for="(item,index) of qualificationList" v-bind:key="index" class="drop-list-wrap">
                                <DropList
                                    v-bind:name="'qualification_'+index"
                                    v-bind:prefix="true"
                                    v-bind:list="item.child||[]"
                                    v-bind:defaulttext="item.text"
                                    
                                    @update-value="updateValue"

                                />
                            </div>

                    </FieldWrap>


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

                    <CheckBoxField
                        v-bind:required="false" 
                        v-bind:suffix="false"
                        v-bind:prefix="false"
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

        <SubmitBar text="立即发布" />
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


    .drop-list-wrap{
        display:inline-block;
        height: 40px;
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
import DropListField from "@components/form/DropListField";
import CheckBoxField from "@components/form/CheckBoxField";
import DropList from  "@components/form/DropList";
import FileUploadImage from  "@components/form/FileUploadImage";
import FileUploadVideo from  "@components/form/FileUploadVideo";
import Editor from  "@components/form/Editor";
import DatePickerField from  "@components/form/DatePickerField";
import SelectCascade from "./SelectCascade";
import SubmitBar from  "./SubmitBar";

import {
    getQualification,
    getProductCategory,
    getBrandList,
    getUnitList
} from "@api/common";



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
        DropListField,
        CheckBoxField,
        DropList,
        FileUploadImage,
        FileUploadVideo,
        Editor,
        DatePickerField
    },
    data(){

        return{
            params:{},
            brandList:[],
            categoryList:[],
            qualificationList:[],
            unitList:[],


            //test data
            dropList:[//todo:fetch list data
                {text:'认证1',id:1,icon:"../../assets/images/inicon11.png"},
                {text:'认证2',id:2,icon:"../../assets/images/inicon12.png"},
                {text:'认证3',id:3,icon:"../../assets/images/inicon13.png"}
            ],
           /* unitList:[
                {text:'个',id:1},
                {text:'箱',id:2},
                {text:'吨',id:3},
            ],*/
            useGroup:[
                {text:'医用',id:1,checked:true},
                {text:'民用',id:2}
            ],
            serviceGroup:[
                {text:'加入VIP',id:1,addition:{style:{ color:'#44A78D' }}},
                {text:'置顶',id:2},
                {text:'加急',id:3}
            ]
        }
    },
    computed:{

    },

    methods:{
        updateValue(name,value){
            console.log('form updateValue>>>',name,value);

            this.params[name] = value;

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
