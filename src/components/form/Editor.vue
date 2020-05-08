<template>
    <vue-neditor-wrap v-model="content" :config="myConfig" :destroy="false" />

</template>

<style lang="scss" scoped>
    
</style>

<script>
    import VueNeditorWrap from 'vue-neditor-wrap';
    import {getLang,setLang} from '@src/utils/common';






    export  default {
        components:{
            VueNeditorWrap
        },
        props:{},
        data () {
            let lang = getLang().toLowerCase();
            if(lang.indexOf('en')>-1){
                lang = 'en';
            }

            let UEDITOR_HOME_URL = '/NEditor/';
            return {
                myConfig: {
                    //语言包
                    lang:lang,
                    //语言包路径配置
                    langPath:UEDITOR_HOME_URL +"i18n/",

                    // 如果需要上传功能,找后端小伙伴要服务器接口地址
                    serverUrl: '/api/web/upload/ueditor',
                    // 你的UEditor资源存放的路径,相对于打包后的index.html
                    UEDITOR_HOME_URL: UEDITOR_HOME_URL,
                    // 编辑器不自动被内容撑高
                    autoHeightEnabled: false,
                    // 初始容器高度
                    initialFrameHeight: 240,
                    // 初始容器宽度
                    initialFrameWidth: '100%',
                    // 关闭自动保存
                    enableAutoSave: false
                },
                content: '',
            }
        },
        methods:{

        },
        mounted(){
            console.log('vue-neditor-wrap mounted');
        }
    }


</script>