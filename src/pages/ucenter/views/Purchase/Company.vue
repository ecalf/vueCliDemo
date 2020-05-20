<template>
    <MemberRightWrap title="主页管理">
            <FormRow>
                <InputField 
                    v-bind:required="true" 
                    defaultvalue=""

                    type="text"
                    label="公司名称" 
                    name="company_name" 
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

                    <FileUploadImage title="支持jpg、png格式" name="company_logo" @update-value="updateValue"/>
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

                    <FileUploadImage title="支持jpg、png格式" name="company_transparency" @update-value="updateValue"/>
                    <FileUploadImage title="支持jpg、png格式" name="company_transparency" @update-value="updateValue"/>
                    <FileUploadImage title="支持jpg、png格式" name="company_transparency" @update-value="updateValue"/>
                    <FileUploadImage title="支持jpg、png格式" name="company_transparency" @update-value="updateValue"/>

                </FieldWrap>
            </FormRow>  

            <FormRow>
                <TextAreaField 
                    v-bind:required="true" 
                    v-bind:suffix="true"
                    v-bind:max-length="240"
                    placeholder="最多输入240个字符"
                    defaultvalue=""
                    label="公司介绍" 
                    name="company_introduce" 
                    width="655"
                    height="160"
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

                    <FileUploadImage title="支持jpg、png格式" name="company_images" @update-value="updateValue"/>
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

                    <FileUploadImage title="支持jpg、png格式" name="qualifications" @update-value="updateValue"/>
                    <FileUploadImage title="支持jpg、png格式" name="qualifications" @update-value="updateValue"/>
                    <FileUploadImage title="支持jpg、png格式" name="qualifications" @update-value="updateValue"/>
                    <FileUploadImage title="支持jpg、png格式" name="qualifications" @update-value="updateValue"/>

                </FieldWrap>
            </FormRow>  

            <FormRow>
                <InputField 
                    v-bind:required="true" 
                    defaultvalue=""

                    type="text"
                    label="公司地址" 
                    name="addr" 
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
                    name="contact_name" 
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
                    name="contact_phone" 
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

   
            <div class="btn-wrap">
                <Button type="button" text="保 存" @on-click="editCompany()" />
            </div>


    </MemberRightWrap>
</template>

<style lang="scss" scoped>
    .fieldGroup{
        margin-bottom: 10px;
    }
    .btn-wrap{
        margin-top:60px;
        margin-bottom: 20px;
        text-align:  center;
    }

</style>

<script>
    import MemberRightWrap from "../../components/MemberRightWrap";
    import FormRow from "@components/form/FormRow";
    import FieldWrap from "@components/form/FieldWrap";
    import InputField from "@components/form/InputField";
    import TextAreaField from  "@components/form/TextAreaField";
    import FileUploadImage from  "@components/form/FileUploadImage";
    import Button from  "@components/form/Button";


    import {editCompany} from "@api/user";
    import {validator} from "@utils/common";


    export default {
        components:{
            MemberRightWrap,
            FormRow,
            FieldWrap,
            InputField,
            TextAreaField,
            FileUploadImage,
            Button
            
        },
        props:{

        },
        data(){
            return {
                fieldData:{
                    company_name:'',
                    company_introduce:'',
                    company_logo:'',//单张图
                    company_transparency:[],//多张图
                    company_images:'',//单张图
                    qualifications:[],//多张图
                    addr:'',
                    contact_name:'',
                    contact_phone:'',
                    email:'',
                    qq:'',
                    wechat:''
                }
            }
        },
        methods:{
            updateValue(name,value){
                console.log('updateValue',name,value);
                if(Object.prototype.toString.call(this.fieldData[name])=='[object Array]'){
                    this.fieldData[name].push(value);
                }else{
                    this.fieldData[name] = value;
                }
                
                console.log(this.fieldData);
            },
            validForm(){
                const params = {};
                const fieldData = this.fieldData;
                let errMsg = '';

                for(let name in fieldData){
                    if(Object.prototype.toString.call(fieldData[name])=='[object Array]'){
                        params[name] = [].concat(fieldData[name]).join();
                    }else{
                        params[name] = fieldData[name];
                    }
                }

                //console.log('params',params);

                if(!params.company_name){
                    errMsg = '请输入公司名称';
                }else if(!params.company_introduce){
                    errMsg = '请输入公司介绍';
                }else if(!params.addr){
                    errMsg = '请输入公司地址';
                }else if(!params.contact_name){
                    errMsg = '请输入联系人';
                }else if(!params.contact_phone){
                    errMsg = '请输入联系电话';
                }else if(!params.email){
                    errMsg = '请输入邮箱';
                }else if(!params.company_logo){
                    errMsg = '请上传公司logo';
                }else if(!params.company_transparency){
                    errMsg = '请上传幻灯片图片';
                }else if(!params.company_images){
                    errMsg = '请上传公司介绍图片';
                }else if(!params.qualifications){
                    errMsg = '请上传公司资质图片';
                }else if(!validator.isTel(params.contact_phone)){
                    errMsg = '电话号码输入错误';
                }else if(!validator.isEmail(params.email)){
                    errMsg = '邮箱输入错误';
                }else if(params.qq&&!validator.isNum(params.qq)){
                    errMsg = 'QQ号码输入错误';
                }

                return {
                    state:!errMsg,
                    params:params,
                    errMsg:errMsg
                }

            },
            
            async editCompany(){
                const info = this.validForm();
                if(!info.state){
                    this.$message({
                        showClose: true,
                        message: info.errMsg,
                        type: "error"
                    });

                    return false;
                }



                const params = info.params;
                const res = await editCompany({data:params});
                if(res.code==200){
                    this.$message({
                        showClose: true,
                        message: res.message,
                        type: "success"
                    });

                }else{
                    this.$message({
                        showClose: true,
                        message: res.message,
                        type: "error"
                    });
                }
            }
        }
    }
</script>