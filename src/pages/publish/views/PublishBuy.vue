<template>
    <section class="commonweb container">
        <Banner v-bind:list="bannerList" />
        <FormContainer  title="品类" v-bind:baseline="false">
            <div class="form-section">
                <SearchBar width="690" />
            </div>
            <div class="form-section">
                <SelectCascade v-bind:data="categoryData" />
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
                    filed-name="title" 
                    width="1020"
                    height="40"
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
                    filed-name="content" 
                    width="1020"
                    height="100"
                    />
            </FormRow>

            <FormRow>
                <DropListField
                    v-bind:required="true" 
                    v-bind:suffix="false"
                    v-bind:prefix="true"
                    v-bind:list="dropList" 
                    label="品牌" 
                    filed-name="brand" 
                    height="40"
                    width="200"

                    />

                <InputField 
                    v-bind:required="false" 
                    v-bind:suffix="false"
                    placeholder=""
                    defaultvalue=""

                    type="text"
                    label="其他品牌" 
                    filed-name="otherBrand" 
                    width="200"
                    height="40"
                    />

                <InputField 
                    v-bind:required="true" 
                    v-bind:suffix="false"
                    placeholder=""
                    defaultvalue=""

                    type="text"
                    label="出口国" 
                    filed-name="cuntry" 
                    width="200"
                    height="40"
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
                    filed-name="originPrice" 
                    width="100"
                    height="40"
                    />

                <InputField 
                    v-bind:required="true" 
                    v-bind:suffix="false"
                    placeholder=""
                    defaultvalue=""

                    type="text"
                    label="市场价" 
                    filed-name="realPrice" 
                    width="100"
                    height="40"
                    />

                <InputField 
                    v-bind:required="true" 
                    v-bind:suffix="false"
                    placeholder=""
                    defaultvalue=""

                    type="text"
                    label="数量" 
                    filed-name="quantity" 
                    width="100"
                    height="40"
                    />


                 <DropListField
                    v-bind:required="true" 
                    v-bind:suffix="false"
                    v-bind:prefix="false"
                    v-bind:list="unitList" 
                    label="单位" 
                    filed-name="unit" 
                    height="40"
                    width="100"

                    />


                <CheckBoxField
                    v-bind:required="false" 
                    v-bind:suffix="false"
                    v-bind:prefix="false"
                    v-bind:list="checkboxGroup"
                    label="用途" 
                    filed-name="use" 
                    height="40"
                    width="120"
                    />

            </FormRow>


            <FormRow>
                <FieldWrap 
                    type="dropListGroup" 
                    v-bind:label="'资质要求'"
                    v-bind:required="false" 
                    height="40"
                    >
                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

                            />
                        </div>

                        <div class="drop-list-wrap">
                            <DropList
                                v-bind:prefix="true"
                                v-bind:list="zizhiList"
                                width="110"

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

                    <FileUploadImage title="增加技术参数图片" />
                    <FileUploadImage title="上传产品图"/>
                    <FileUploadImage title="上传企业图"/>
                    <FileUploadImage title="其他"/>

                </FieldWrap>
            </FormRow>  

            <FormRow>
                <FieldWrap 
                    type="fileUploadGroup" 
                    label="上传视频"
                    v-bind:required="false" 
                    height="150"
                    >

                    <FileUploadVideo title="选择视频" />
                    

                </FieldWrap>
            </FormRow> 


            <FormRow>
                <FieldWrap 
                    type="textarea"
                    label="电脑端描述"
                    v-bind:required="true" 
                    height="400"
                    >

                    <textarea height="400"></textarea>
                    

                </FieldWrap>
            </FormRow>


            <FormRow>
                <FieldWrap 
                    type="dropListGroup" 
                    label="截止日期"
                    v-bind:required="false" 
                    height="40"
                    >
                    <div class="drop-list-wrap">
                        <DropList
                            v-bind:prefix="true"
                            v-bind:list="zizhiList"
                            width="110"

                        />
                    </div>

                    <div class="drop-list-wrap">
                        <DropList
                            v-bind:prefix="true"
                            v-bind:list="zizhiList"
                            width="110"

                        />
                    </div>

                    <div class="drop-list-wrap">
                        <DropList
                            v-bind:prefix="true"
                            v-bind:list="zizhiList"
                            width="110"

                        />
                    </div>
                </FieldWrap>
            </FormRow>


            <FormRow>

                <CheckBoxField
                    v-bind:required="false" 
                    v-bind:suffix="false"
                    v-bind:prefix="false"
                    v-bind:list="serviceGroup"
                    label="增值服务" 
                    filed-name="use" 
                    height="40"
                    width="120"
                    />


            </FormRow>

        </FormContainer>
    </section>

</template>


<style lang="scss" scoped>
    .container{
        margin-bottom:15px;
    }

    .form-section{
        display: flex;
        justify-content: center;
        margin-top:20px;
    }


    .drop-list-wrap{
        display:inline-block;
        height: 40px;
    }

</style>

<script>
import Banner from "../components/Banner";
import SelectCascade from "../components/SelectCascade";

import FormContainer from "@components/form/FormContainer";
import SearchBar from "@components/form/SearchBar";
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import TextAreaField from "@components/form/TextAreaField";
import DropListField from "@components/form/DropListField";
import CheckBoxField from "@components/form/CheckBoxField";
import DropList from  "@components/form/DropList.vue";
import FileUploadImage from  "@components/form/FileUploadImage.vue";
import FileUploadVideo from  "@components/form/FileUploadVideo.vue";

//测试数据
import categoryData from "../store/categoryData";



export default {
    name: "PublishBuy",
    components:{
        Banner,
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
        FileUploadVideo
    },
    data(){

        return{
            bannerList:[//todo:fetch list data
                {text:'Buybanner',id:1},
                {text:'Buybanner',id:2},
                {text:'Buybanner',id:3},
                {text:'Buybanner',id:4}
            ],
            categoryData:categoryData,
            dropList:[//todo:fetch list data
                {text:'认证1',id:1,icon:"../../assets/images/inicon11.png"},
                {text:'认证2',id:2,icon:"../../assets/images/inicon12.png"},
                {text:'认证3',id:3,icon:"../../assets/images/inicon13.png"}
            ],
            unitList:[
                {text:'个',id:1},
                {text:'箱',id:2},
                {text:'吨',id:3},
            ],
            checkboxGroup:[
                {text:'医用',id:1,checked:true},
                {text:'民用',id:2}
            ],
            serviceGroup:[
                {text:'加入VIP',id:1},
                {text:'置顶',id:2},
                {text:'加急',id:3}
            ],
            zizhiList:[
                {text:'资质1',id:1,icon:"../../assets/images/inicon11.png"},
                {text:'资质2',id:2,icon:"../../assets/images/inicon12.png"},
                {text:'资质3',id:3,icon:"../../assets/images/inicon13.png"},
                {text:'资质4',id:4,icon:"../../assets/images/inicon14.png"}
            ]
        }
    },
    computed:{

    },
    methods:{

    }

}
</script>
