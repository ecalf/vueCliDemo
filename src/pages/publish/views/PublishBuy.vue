<template>
    <section class="commonweb container">
        <Banner v-bind:list="bannerList" />
        <FormContainer  title="品类">
            <div class="form-section">
                <SearchBar width="690" />
            </div>
            <div class="form-section">
                <SelectCascade v-bind:data="categoryData" />
            </div>
        </FormContainer>

        <FormContainer  title="发布信息">
            <div class="title-buttom-slit"></div>
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

                    type="textarea"
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

            </FormRow>

        </FormContainer>

        <FormContainer  title="图片上传">
            
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

    .title-buttom-slit{
        width:1150px;
        height:0px;
        border:1px solid #EAECED;
    }

</style>

<script>
import Banner from "../components/Banner";
import SelectCascade from "../components/SelectCascade";

import FormContainer from "@components/form/FormContainer";
import SearchBar from "@components/form/SearchBar";
import FormRow from "@components/form/FormRow";
import InputField from "@components/form/InputField";
import TextAreaField from "@components/form/TextAreaField";
import DropListField from "@components/form/DropListField";

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
        InputField,
        TextAreaField,
        DropListField
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
                {text:'认证1',id:1,icon:"@assets/inicon11.png"},
                {text:'认证2',id:2,icon:"@assets/inicon12.png"},
                {text:'认证3',id:3,icon:"@assets/inicon13.png"}
            ],
            unitList:[
                {text:'个',id:1},
                {text:'箱',id:2},
                {text:'吨',id:3},
            ]
        }
    },
    computed:{

    },
    methods:{

    }

}
</script>
