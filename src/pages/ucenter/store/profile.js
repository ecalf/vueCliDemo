import {getProfile} from "@api/userApi";
import {delToken} from "@utils/common";

export default {
    namespaced: true,//必须通过命名空间访问子模块的 action、mutation 和 getter
    //strict模式：任何 state 的变更如果不是通过 mutation commit 的都将被阻止,存在性能损失,只在开发环境使用
    strict: process.env.NODE_ENV !== 'production',
    state: {

    },
    getters: {
        //模块外使用：getters['moduleName/getterName']
       
    },
    mutations: {
        //模块外使用:commit('moduleName/mutationName',data)
        //模块内使用:commit('mutationName',data)
        updateProfile(state,profile){
            console.log('mutation updateProfile', profile);
            for(let key in profile){
                state[key] = profile[key]||'';
            }
        }
    },
    actions: {
        //action.method(context,data) 根节点状态则为 context.rootState
        //模块外使用： dispatch('moduleName/actionName',data)
        //模块内使用: dispatch('actionName',data)
        async getProfile({state,commit, rootState}){

            //const res =  await getProfile();
            console.log('test data of profile');

            const res = {
                code:200,
                data:{
                    "uid": 10, //用户id
                    "type": 1, //'注册类型：1个人 2 机构 3企业',
                    "mobile": "test", //手机号
                    "status": 0,
                    "profiles": { //详情
                        "user_name": "test", //用户
                        "mobile": "test", //手机
                        "company_name": "", //公司名称
                        "organization_name": "", //组织名称
                        "contact_name": null, //联系人
                        "contact_phone": "", //联系人号码
                        "email": "", //邮箱
                        "country": "America", //国家
                        "business_license": "http://img.dlitong.com/51771b85b103564e50c2134ffcc86109.jpg", //营业执照
                        "business_license_code": "536236426", //营业执照号码
                        "company_form": 1, // '企业形式 1 工厂 2 代理',
                        "bank_branch_name": "深圳分行",//开户支行名称',
                        "bank_name": "中国银行", //银行名称
                        "bank_account": "53265262626",//银行卡号
                        "full_name": "小明"//姓名
                    }
                }
            }



            if(res.code==200){
                const profile = {
                    uid:res.data.uid,
                    type:res.data.type,
                    status:res.data.status,
                    ...res.data.profiles
                }

                commit('updateProfile',profile);
            }else{
                commit('updateProfile',{});
                delToken();
            }            

        }

    }

}