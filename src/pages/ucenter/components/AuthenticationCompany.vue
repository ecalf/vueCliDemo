<template>
    <div class="form-panel">
        <FormRow>
            <p class="authenticate-title">企业认证</p>
        </FormRow> 

        <FormRow>
            <InputField 
                v-bind:required="true" 
                type="text"
                label="企业银行名称" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="开户银行" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="银行账户" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="负责人姓名" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="负责人身份证" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        



        <FormRow>
            <FieldWrap 
                type="fileUploadGroup" 
                label="手持证件照"
                v-bind:required="true" 
                height="150"
                width="auto"
                labelwidth="130"
                >

                <FileUploadImage title="手持身份证正面" name="company_transparency" @update-value="updateValue"/>
                <FileUploadImage title="手持身份证反面" name="company_transparency" @update-value="updateValue"/>
               

            </FieldWrap>
        </FormRow> 

        <FormRow>
            <InputField 
                v-bind:required="false" 

                type="text"
                label="企业形式" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="false" 

                type="text"
                label="经营范围" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="营业执照编号" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                @update-value="updateValue"
                />
        </FormRow>

         <FormRow>
            <FieldWrap 
                type="fileUploadGroup" 
                label="营业执照"
                v-bind:required="true" 
                height="150"
                width="auto"
                labelwidth="130"
                >

                <FileUploadImage title="营业执照照片" name="company_transparency" @update-value="updateValue"/>
               

            </FieldWrap>
        </FormRow>  


        <div class="file-wrap">
            <FileUpload title="上传认证公函" type="file" />
            <a href="" download="万和优采企业认证公函模板" class="download-file">下载公函模板</a>
        </div>

        <div class="btn-wrap">
            <Button type="button" text="保 存" @on-click="authenticate()" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .form-panel{
        margin:0 auto;
        width:600px;
    }
    .authenticate-title{
        font-size: 16px;
        font-weight: bold;
        margin-left:140px;
        width: 600px;
    }

    .download-file{
        display: inline-block;
        min-width:200px;
        height: 40px;
        border:none;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        line-height: 40px;
        color:$fontColor;
        background-color:#EAECED;
        vertical-align: middle;
        cursor: default;
        @include default-radius;
    }

    .btn-wrap{
        margin-top:60px;
        margin-bottom: 20px;
        text-align:  center;
        width:555px;
    }
    .file-wrap{
        margin-top:30px;
        margin-bottom: 20px;
        text-align:  center;
        width:555px;
    }
</style>

<script>
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import FileUploadImage from  "@components/form/FileUploadImage";
import FileUpload from "@components/form/FileUpload";
import Button from  "@components/form/Button";

import {validator} from "@utils/common";


export default {
    components:{
        FormRow,
        FieldWrap,
        InputField,
        FileUploadImage,
        FileUpload,
        Button
    },
    props:{

    },
    data(){
        return {
            fieldData:{

            }
        }
    },
    methods:{
        updateValue(name,value){
            if(Object.prototype.toString.call(this.fieldData[name])=='[object Array]'){
                this.fieldData[name].push(value);
            }else{
                this.fieldData[name] = value;
            }

            console.log('updateValue',name,value);
            console.log(this.fieldData);
        },
        authenticate(){
            this.$emit('on-authenticate','company',this.fieldData);

        }
    }
}
</script>