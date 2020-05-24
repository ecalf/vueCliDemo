<template>
    <div class="form-panel">
        <FormRow>
            <p class="authenticate-title">企业认证</p>
        </FormRow> 


        <FormRow>
            
            <InputField 
                v-bind:required="true" 

                type="text"
                label="企业名称" 
                name="company_name" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.company_name"
                @update-value="updateValue"
                />

        </FormRow>


        <FormRow>
            <RadioGroupField
                v-bind:required="true" 
                v-bind:list="companyFormGroup"
                label="企业形式" 
                name="company_form" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.company_form"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="false" 

                type="text"
                label="经营范围" 
                name="business_scope_cate" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.business_scope_cate"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="营业执照编号" 
                name="business_license_code" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.business_license_code"
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

                <FileUploadImage
                    title="营业执照照片" 
                    name="business_license" 
                    v-model="fieldData.business_license"
                    @update-value="updateValue"
                />
               

            </FieldWrap>
        </FormRow>  

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="联系人" 
                name="contact_name" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.contact_name"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="联系电话" 
                name="contact_phone" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.contact_phone"
                @update-value="updateValue"
                />
        </FormRow>

        
        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="负责人姓名" 
                name="legal_person" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.legal_person"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="负责人身份证" 
                name="legal_person_cardno" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.legal_person_cardno"
                @update-value="updateValue"
                />
        </FormRow>

        



        <FormRow>
            <FieldWrap 
                v-bind:required="true"
                type="fileUploadGroup" 
                label="负责人证件照"
                height="150"
                width="auto"
                labelwidth="130"
                >

                <FileUploadImage
                    title="手持身份证照片"
                    name="hand_identify_card_photo"
                    v-model="fieldData.hand_identify_card_photo" 
                    @update-value="updateValue"
                    />

                <FileUploadImage
                    title="身份证正面"
                    name="legal_hand_identify_card_photo_font"
                    v-model="fieldData.legal_hand_identify_card_photo_font" 
                    @update-value="updateValue"
                    />

                <FileUploadImage 
                    title="身份证反面" 
                    name="legal_hand_identify_card_photo_back" 
                    v-model="fieldData.legal_hand_identify_card_photo_back"
                    @update-value="updateValue"
                    />
               

            </FieldWrap>
        </FormRow> 

        <FormRow>
            <InputField 
                v-bind:required="true" 
                type="text"
                label="企业开户银行" 
                name="bank_name" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.bank_name"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="开户支行" 
                name="bank_branch_name" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.bank_branch_name"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="银行卡号" 
                name="bank_account" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.bank_account"
                @update-value="updateValue"
                />
        </FormRow>

        <FormRow>
            <InputField 
                v-bind:required="true" 

                type="text"
                label="账户姓名" 
                name="full_name" 
                width="312"
                height="40"
                labelwidth="130"
                v-model="fieldData.full_name"
                @update-value="updateValue"
                />
        </FormRow>





        <div class="file-wrap">
            <FileUpload 
                title="上传认证公函" 
                type="file" 
                name="official_letter" 
                v-model="fieldData.official_letter"
                @update-value="updateValue"
                />
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
        width: 666px;
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
import RadioGroupField from "@components/form/RadioGroupField";
import FileUploadImage from  "@components/form/FileUploadImage";
import FileUpload from "@components/form/FileUpload";
import Button from  "@components/form/Button";

import validator from "@utils/validator";


export default {
    components:{
        FormRow,
        FieldWrap,
        InputField,
        RadioGroupField,
        FileUploadImage,
        FileUpload,
        Button
    },
    props:{

    },
    data(){
        return {
            companyFormGroup:[
                {text:'工厂',id:1,checked:true},
                {text:'代理',id:2}

            ],
            fieldData:{
                //个人认证：identify_person 组织认证：identify_organization 公司认证：identify_company
                scene:'identify_company',//认证场景 
                
                bank_name: '',//开户银行
                bank_branch_name: '',//开户支行
                bank_account: '',//银行账户
                full_name: '',//银行账户姓名

                company_name:'',//企业名称
                business_license: '',//营业执照照片
                business_license_code: '',//营业执照编号
                business_scope_cate: '',//经营范围
                company_form: '',//企业形式
                
                hand_identify_card_photo:'',//负责人手持证件照
                legal_hand_identify_card_photo_font: '',//身份证正面
                legal_hand_identify_card_photo_back: '',//身份证背面
                legal_person: '',//负责人姓名
                legal_person_cardno: '',//负责人身份证号码

                contact_name:'',//联系人
                contact_phone:'',//联系人电话

                official_letter: ''//认证公函

            }
        }
    },
    methods:{
        updateValue(name,value){
            /****************简单数据已经使用 v-model 指令获取***************
            if((/\_\d+$/).test(name)){//数组field: xxx_0, xxx_1, xxx_2
                let nameParseInfo = name.match(/(.+)\_(\d+)$/);
                let fieldName = nameParseInfo[1];
                let index = nameParseInfo[2]*1;
                if(Object.prototype.toString.call(this.fieldData[fieldName])!='[object Array]'){
                    this.fieldData[fieldName] = [];
                }
                this.fieldData[fieldName][index] = value;

            }else{
                this.fieldData[name] = value;
            }

            ***********************/


            console.log('updateValue',name,value);
            console.log(this.fieldData);
        },

        validForm(){
            const params = {};
            const fieldData = this.fieldData;
            let errMsg = '';

            console.log('fieldData>>>',fieldData);

            for(let name in fieldData){
                if(Object.prototype.toString.call(fieldData[name])=='[object Array]'){
                    params[name] = [].concat(fieldData[name]).join().replace(/^,|,$/g,'');
                }else{
                    if(typeof(fieldData[name])=='object'&&fieldData[name].id!=undefined){
                        params[name] = fieldData[name].id;
                    }else{
                        params[name] = fieldData[name];
                    }
                    
                }
            }

            //console.log('params',params);

            if(!params.company_name){
                errMsg = '请输入企业名称';
            }else if(!params.business_license_code){
                errMsg = '请输入营业执照编号';
            }else if(!(/^(\d{15}|\d{18})$/).test(params.business_license_code)){
                errMsg = '营业执照编号输入错误,请输入15或18位数字';
            }else if(!params.business_license){
                errMsg = '请上传营业执照照片';
            }else if(!params.legal_person){
                errMsg = '请输入企业负责人姓名';
            }else if(!params.legal_person_cardno){
                errMsg = '请输入企业负责人身份证号码';
            }else if(!validator.isIdCard(params.legal_person_cardno)){
                errMsg = '企业负责人身份证号码输入错误';
            }else if(!params.hand_identify_card_photo){
                errMsg = '请上传负责人身份证照片';
            }else if(!params.legal_hand_identify_card_photo_font){
                errMsg = '请上传身份证正面照片';
            }else if(!params.legal_hand_identify_card_photo_back){
                errMsg = '请上传身份证反面照片';
            }else if(!params.contact_name){
                errMsg = '请输入联系人';
            }else if(!params.contact_phone){
                errMsg = '请输入联系电话';
            }else if(!validator.isTel(params.contact_phone)){
                errMsg = '联系电话输入错误';
            }else if(!params.bank_name){
                errMsg = '请输入企业开户银行名称';
            }else if(!params.bank_branch_name){
                errMsg = '请输入开户支行名称';
            }else if(!params.bank_account){
                errMsg = '请输入银行卡号';
            }/*else if(!validator.isBankCard(params.bank_account)){
                errMsg = '银行卡号输入错误';
            }*/else if((/^\d{16,19}$/).test(params.bank_account)){
                errMsg = '银行卡号输入错误,请输入16~19位数字';
            }else if(!params.full_name){
                errMsg = '请输入银行账户姓名';
            }else if(!params.official_letter){
                errMsg = '请上传认证公函';
            }

            return {
                state:!errMsg,
                params:params,
                errMsg:errMsg
            }

        },

        authenticate(){
            const info = this.validForm();
            if(!info.state){
                this.$message({
                    showClose: true,
                    message: info.errMsg,
                    type: "error"
                });

                return false;
            }else{

                const params = {
                    scene: info.params.scene,
                    company:{
                        business_license: info.params.business_license,
                        business_license_code: info.params.business_license_code,
                        business_scope_cate: info.params.business_scope_cate,
                        company_name: info.params.company_name,
                        company_form: info.params.company_form,
                        contact_name: info.params.contact_name,
                        contact_phone: info.params.contact_phone,
                        legal_hand_identify_card_photo_back: info.params.legal_hand_identify_card_photo_back,
                        legal_hand_identify_card_photo_font: info.params.legal_hand_identify_card_photo_font,
                        legal_person: info.params.legal_person,
                        legal_person_cardno: info.params.legal_person_cardno,
                        official_letter: info.params.official_letter
                    },
                    bank:{
                        bank_account: info.params.bank_account,
                        bank_branch_name: info.params.bank_branch_name,
                        bank_name: info.params.bank_name,
                        full_name: info.params.full_name
                    }
                }

                this.$emit('on-authenticate','companyAuthentication',params);
            }

        }
    }
}
</script>