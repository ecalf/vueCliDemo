import {getToken} from "./common";

export default {
    created(){//页面组件刷新自动尝试获取用户信息
        console.log('mixin created getProfile');
        if(getToken()){
            this.$store.dispatch('profile/getProfile');
        }else{
            this.$store.commit('profile/updateProfile',{});
        }
        
    }
}
