<template>
    <MemberRightWrap title="账户信息">
        <!-- logo-->
        <div class="user-profile">
            <img class="personal-img" src="@assets/images/personnel.png" alt />
            <p class="company-name">比亚迪口罩公司</p>
            <p class="user-name">张大千</p>
        </div>

        <div class="info-section user-info">
            <div class="info-title">基本信息</div>
        </div>

        <div class="info-section company-info">
            <div class="info-title">公司信息</div>

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
            border:1px solid #479E84;
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
            color: #479E84;
            font-size:16px;
        }
    }

</style>



<script>
import MemberRightWrap from "../../components/MemberRightWrap";
import FormRow from "@components/form/FormRow";
import FieldWrap from "@components/form/FieldWrap";
import InputField from "@components/form/InputField";
import Button from  "@components/form/Button";

   
export default {
    components:{
        MemberRightWrap,
        FormRow,
        FieldWrap,
        InputField,
        Button

    },
    props:{},
    data(){
        return {}
    },
    computed:{
        profile(){
          return this.$store.state.profile;
        }
    },
    methods:{
        
    },
    created(){
        console.log('profile>>>',this.profile);
    }
}

</script>