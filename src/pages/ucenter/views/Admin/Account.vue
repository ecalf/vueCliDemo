<template>
    <MemberRightWrap title="账户信息">
        <!-- logo-->
        <div class="user-profile">
            <img class="personal-img" src="@assets/images/personnel.png" alt />
            <p class="company-name">比亚迪口罩企业</p>
            <p class="user-name">张大千</p>
        </div>

        <div class="info-section user-info">
            <div class="info-title">基本信息</div>
       
            <FormRow>
                <TextField 
                    label="登录密码"
                    text="******"
                    width="180"
                    height="25"
                    />

                <IconEditable 
                    v-bind:width="16" 
                    v-bind:height="16"
                    @on-click="modifyPass()"
                    />
            </FormRow>

            <FormRow>
                <TextField 
                    label="手机认证"
                    text="13723764444"
                    width="180"
                    height="25"
                    />

                <IconEditable 
                    v-bind:width="16" 
                    v-bind:height="16" 
                    v-bind:border="0" 
                    v-bind:radius="0" 
                    @on-click="changeMobile()" 
                    />

            </FormRow>

            <FormRow>
                <InputField 
                    label="邮箱认证"
                    width="172"
                    height="25"
                    v-model="email"
                    />

                <Icon 
                    v-bind:border="0" 
                    v-bind:radius="0" 
                    content="认证"
                    @on-click="authticateEmail()" 
                    />


                <InputField 
                    label="实名认证"
                    width="172"
                    height="25"
                    readonly
                    v-model="real_name"
                    />

                 <Icon 
                    v-bind:border="0" 
                    v-bind:radius="0" 
                    content="认证"
                    @on-click="authticateRealName()" 
                    />


            </FormRow>

            <FormRow>
                <InputField 
                    label="微信"
                    width="220"
                    height="25"
                    v-model="wechat"
                    />

                <InputField 
                    label="QQ"
                    width="220"
                    height="25"
                    v-model="qq"
                    />

            </FormRow>

            <div class="btn-wrap">
                <Button type="button" text="保 存" @on-click="editPersonalInfo()" />
            </div>

        </div>

        <div class="info-section company-info">
            <div class="info-title">企业信息</div>
            <FormRow>
                <TextField 
                    label="企业名称"
                    v-bind:text="companyInfo.company_name||''"
                    width="220"
                    height="25"
                    />

                <TextField 
                    label="所属行业"
                    v-bind:text="companyInfo.industry||''"
                    width="220"
                    height="25"
                    />
            </FormRow>

            <FormRow>
                <TextField 
                    label="经营方式"
                    v-bind:text="companyForm(companyInfo.company_form)"
                    width="220"
                    height="25"
                    />

                <TextField 
                    label="联系人"
                    v-bind:text="companyInfo.contact_name||''"
                    width="220"
                    height="25"
                    />
            </FormRow>
        </div>

    </MemberRightWrap>
</template>



<style lang="scss" scoped>
    .user-profile{
        margin-top:30px;
        text-align: center;

        .personal-img{
            width: 84px;
            height: 84px;
            border:1px solid $green;
            border-radius: 50%;
        }
        .company-name{
            margin:10px auto;
            font-size: 18px;
        }
        .user-name{
            font-size: 16px;
            color:#479E84;
        }

    }

    .info-section{
        margin-top:45px;
        margin-bottom: 30px;
        padding:0 50px;

        font-size:14px;
        .info-title{
            color: $green;
            font-size:16px;
        }
    }

    .user-info{
        border-bottom: 1px dotted #EAECED;
    }


    .btn-wrap{
        margin-top:30px;
        margin-left:115px;
        margin-bottom: 20px;
        text-align:  left;
    }


</style>



<script>
import MemberRightWrap from "../../components/MemberRightWrap";
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import TextField from "@components/form/TextField";
import Button from  "@components/form/Button";
import Icon from "@components/icon/Icon";
import IconEditable from "@components/icon/IconEditable";

   
export default {
    components:{
        MemberRightWrap,
        FormRow,
        FieldWrap,
        InputField,
        TextField,
        Button,
        Icon,
        IconEditable

    },
    props:{},
    data(){
        return {
            companyFormGroup:this.$store.state.company.companyFormGroup,
            email:'1836173@qq.com',
            real_name:'张大千',
            wechat:'微信12312',
            qq:'287461246'
        }
    },
    computed:{
        companyForm(){
            return (id)=>{
                let text = '';
                this.companyFormGroup.forEach((item)=>{ 
                    if(id==item.id){
                        text = item.text;
                    }  
                });
                return text;
            }
        },
        profile(){
            return this.$store.state.profile;
        },
        companyInfo(){
            return this.$store.state.profile.user_company;
        },
        userInfo(){
            return this.$store.state.profile.user_info;
        }
    },
    
    methods:{
        modifyPass(){
            console.log('modifyPass');
        },
        changeMobile(){
            console.log('changeMobile');
        },
        authticateEmail(){
            console.log('authticateEmail');
        },
        authticateRealName(){
            this.$router.push('/ucenter/authentication');
        },
        editPersonalInfo(){
            console.log('editPersonalInfo');
        }
    }
}

</script>