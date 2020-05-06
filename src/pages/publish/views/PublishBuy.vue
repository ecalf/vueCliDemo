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

                    type="text"
                    label="标题" 
                    filed-name="title" 
                    width="1020"
                    />
            </FormRow>

            <FormRow>
                <TextAreaField 
                    v-bind:required="true" 
                    v-bind:suffix="true"
                    v-bind:max-length="30"
                    placeholder="最多输入100个字符"

                    type="textArea"
                    label="描述" 
                    filed-name="content" 
                    width="1020"
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
        TextAreaField
    },
    data(){

        return{
            bannerList:[//todo:fetch list data
                {title:'Buybanner',id:1},
                {title:'Buybanner',id:2},
                {title:'Buybanner',id:3},
                {title:'Buybanner',id:4}
            ],
            categoryData:categoryData
        }
    },
    computed:{

    },
    methods:{

    }

}
</script>
