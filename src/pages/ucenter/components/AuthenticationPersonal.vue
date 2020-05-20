<template>
    <div class="form-panel">
        <FormRow>
            <p class="authenticate-title">个人认证</p>
        </FormRow> 

        <FormRow>
            <InputField 
                v-bind:required="true" 
                error=""

                type="text"
                label="姓名" 
                name="contact_name" 
                width="312"
                height="40"
                v-model="fieldData.contact_name"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 
                
                type="text"
                label="身份证号" 
                name="idcard" 
                width="312"
                height="40"
                v-model="fieldData.idcard"
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
                >

                <FileUploadImage title="手持身份证正面" name="hand_identify_card_photo" @update-value="updateValue"/>
                <FileUploadImage title="手持身份证反面" name="hand_identify_card_photo" @update-value="updateValue"/>
               

            </FieldWrap>
        </FormRow>  


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
        margin-left:115px;
        width: 600px;
    }

    .btn-wrap{
        margin-top:60px;
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
import Button from  "@components/form/Button";

import {validator} from "@utils/common";


export default {
    components:{
        FormRow,
        FieldWrap,
        InputField,
        FileUploadImage,
        Button
    },
    props:{

    },
    data(){
        return {
            fieldData:{
                scene:'identify_person',//个人：identify_person 组织：identify_organization 公司：identify_company
                idcard:'123123',//身份证
                hand_identify_card_photo:[],//手持证件
                organization_name:'',//机构名称 scene为identify_organization
                contact_name:'',//联系人     
                contact_phone:'',//联系人号码       
                company_name:'',//公司名称        
                business_license:'',//营业执照        
                business_license_code:'',//营业执照编号      
                business_scope_cate:'',//经营范围类型      
                official_letter:'',//公函      
                company_form:'',//企业形式        
                bank_name:'',//银行名称        
                bank_branch_name:'',//支行名称        
                bank_account:'',//银行卡号        
                full_name:'',//姓名
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
            this.$emit('on-authenticate','personal',this.fieldData);

        }
    }
}

</script>