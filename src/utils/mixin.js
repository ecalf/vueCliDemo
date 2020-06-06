import {getToken,isPC} from "./common";

export default {
    created(){//页面组件刷新自动尝试获取用户信息
        let pageName = this.$router.history.current.name;
        console.log('mixin created: ',pageName);


        if(pageName!='Login'&&pageName!='Register'&&getToken()){
            this.$store.dispatch('profile/getProfile');
        }else{
            //登录注册清除本地保存的 profile
            //this.$store.commit('profile/updateProfile',{});
        }
        
    },
    beforeMount(){
        if(!isPC()){
            location.href="http://m.scm.wanheglobal.com/h5/index.html"
        }
    }
}
