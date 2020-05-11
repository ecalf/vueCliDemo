import {getToken} from "./common";

export default {
    created(){//页面组件刷新自动尝试获取用户信息
        console.log('mixin created getProfile');

        let pageName = this.$router.history.name;
        if(pageName=='Login'||pageName=='Register'){
            return false;
        }

        if(pageName!='Login'&&pageName!='Register'&&getToken()){
            this.$store.dispatch('profile/getProfile');
        }else{
            this.$store.commit('profile/updateProfile',{});
        }
        
    }
}
