<template>
<MemberRightWrap title="主页管理">
        <FormRow>
            <InputField 
                v-bind:required="true" 
                defaultvalue=""

                type="text"
                label="公司名称" 
                name="title" 
                width="655"
                height="40"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <FieldWrap 
                type="fileUploadGroup" 
                label="公司LOGO"
                v-bind:required="true" 
                height="150"
                width="680"
                >

                <FileUploadImage title="logo图片" name="logo" @update-value="updateValue"/>
            </FieldWrap>
        </FormRow>  

        <FormRow>
            <FieldWrap 
                type="fileUploadGroup" 
                label="幻灯片"
                v-bind:required="true" 
                height="150"
                width="680"
                >

                <FileUploadImage title="支持jpg、png格式" name="slideImg" @update-value="updateValue"/>
                <FileUploadImage title="支持jpg、png格式" name="slideImg" @update-value="updateValue"/>
                <FileUploadImage title="支持jpg、png格式" name="slideImg" @update-value="updateValue"/>
                <FileUploadImage title="支持jpg、png格式" name="slideImg" @update-value="updateValue"/>

            </FieldWrap>
        </FormRow>  

        <FormRow>
            <TextAreaField 
                v-bind:required="true" 
                v-bind:suffix="true"
                v-bind:max-length="100"
                placeholder="最多输入100个字符"
                defaultvalue=""
                label="公司介绍" 
                name="desc" 
                width="655"
                height="100"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <FieldWrap 
                type="fileUploadGroup" 
                label="图片介绍"
                v-bind:required="true" 
                height="150"
                width="680"
                >

                <FileUploadImage title="logo图片" name="descImg" @update-value="updateValue"/>
            </FieldWrap>
        </FormRow>  

        <FormRow>
            <FieldWrap 
                type="fileUploadGroup" 
                label="公司资质"
                v-bind:required="true" 
                height="150"
                width="680"
                >

                <FileUploadImage title="支持jpg、png格式" name="qualificationImg" @update-value="updateValue"/>
                <FileUploadImage title="支持jpg、png格式" name="qualificationImg" @update-value="updateValue"/>
                <FileUploadImage title="支持jpg、png格式" name="qualificationImg" @update-value="updateValue"/>
                <FileUploadImage title="支持jpg、png格式" name="qualificationImg" @update-value="updateValue"/>

            </FieldWrap>
        </FormRow>  

        <FormRow>
            <InputField 
                v-bind:required="true" 
                defaultvalue=""

                type="text"
                label="公司地址" 
                name="address" 
                width="655"
                height="40"
                @update-value="updateValue"
                />
        </FormRow>


        <FormRow>
            <div class="fieldGroup">
            <InputField 
                v-bind:required="true" 
                v-bind:suffix="false"
                placeholder=""
                defaultvalue=""

                type="text"
                label="联系人" 
                name="contact" 
                width="142"
                height="40"
                @update-value="updateValue"
                />

            <InputField 
                v-bind:required="true" 
                v-bind:suffix="false"
                placeholder=""
                defaultvalue=""

                type="text"
                label="联系电话" 
                name="mobile" 
                width="142"
                height="40"
                @update-value="updateValue"
                />

            <InputField 
                v-bind:required="true" 
                v-bind:suffix="false"
                placeholder=""
                defaultvalue=""

                type="text"
                label="邮箱" 
                name="email" 
                width="142"
                height="40"
                @update-value="updateValue"
                />
            </div>

            <div class="fieldGroup">
            <InputField 
                v-bind:required="false" 
                v-bind:suffix="false"
                placeholder=""
                defaultvalue=""

                type="text"
                label="微信" 
                name="wechat" 
                width="142"
                height="40"
                @update-value="updateValue"
                />

            <InputField 
                v-bind:required="false" 
                v-bind:suffix="false"
                placeholder=""
                defaultvalue=""

                type="text"
                label="QQ" 
                name="qq" 
                width="142"
                height="40"
                @update-value="updateValue"
                />
            </div>
        </FormRow>

</MemberRightWrap>
</template>

<style lang="scss" scoped>
    .fieldGroup{
        margin-bottom: 10px;
    }
</style>

<script>
    import MemberRightWrap from "../../components/MemberRightWrap";
    import FormRow from "@components/form/FormRow";
    import FieldWrap from "@components/form/FieldWrap";
    import InputField from "@components/form/InputField";
    import TextAreaField from  "@components/form/TextAreaField";
    import FileUploadImage from  "@components/form/FileUploadImage";



    export default {
        components:{
            MemberRightWrap,
            FormRow,
            FieldWrap,
            InputField,
            TextAreaField,
            FileUploadImage
            
        },
        props:{

        },
        data(){
            return {

            }
        },
        methods:{
            updateValue(name,value){
                console.log('updateValue',name,value);
            }
        }
    }
</script>