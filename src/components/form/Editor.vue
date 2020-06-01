<template>
    <vue-neditor-wrap v-model="value" v-bind:config="myConfig" v-bind:destroy="false" v-bind:data-value="$attrs.value" />

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
        props:{
            name:String,
            defaultcontent:String
        },
        data () {
            let lang = getLang().toLowerCase();
            if(lang.indexOf('en')>-1){
                lang = 'en';
            }

            let UEDITOR_HOME_URL = '/NEditor/';


            return {
                value: '',
                myConfig: {
                    //语言包
                    lang:lang,
                    //语言包路径配置
                    langPath:UEDITOR_HOME_URL +"i18n/",

                    // 如果需要上传功能,找后端小伙伴要服务器接口地址
                    //如果在 neditor.service.js 重写了getActionUrl方法，该选项会失效
                    //接口返回的json数据需要有url字段保存上传后的图片地址
                    serverUrl: 'http://192.168.1.26:8080/api/v1/upload',
                    imageFieldName:'image',//上传图片使用的表单项名称

                    // 你的UEditor资源存放的路径,相对于打包后的index.html
                    UEDITOR_HOME_URL: UEDITOR_HOME_URL,

                    // 容器不在viewport内时编辑器不自动漂浮
                    autoFloatEnabled:false,
                    // 编辑器不自动被内容撑高
                    autoHeightEnabled: false,
                    // 初始容器高度
                    initialFrameHeight: 275,
                    // 初始容器宽度
                    initialFrameWidth: '100%',
                    // 关闭自动保存
                    enableAutoSave: false,
                    charset:"utf-8",
                    toolbars: [
                        [
                            "fullscreen",
                            "source",
                            "|",
                            "undo",
                            "redo",
                            "|",
                            "bold",
                            "italic",
                            "underline",
                            "fontborder",
                            "strikethrough",
                            "superscript",
                            "subscript",
                            "removeformat",
                            "formatmatch",
                            "autotypeset",
                            "blockquote",
                            "pasteplain",
                            "|",
                            "forecolor",
                            "backcolor",
                            "insertorderedlist",
                            "insertunorderedlist",
                            "selectall",
                            "cleardoc",
                            "|",
                            "rowspacingtop",
                            "rowspacingbottom",
                            "lineheight",
                            "|",
                            "customstyle",
                            "paragraph",
                            "fontfamily",
                            "fontsize",
                            "|",
                            "directionalityltr",
                            "directionalityrtl",
                            "indent",
                            "|",
                            "justifyleft",
                            "justifycenter",
                            "justifyright",
                            "justifyjustify",
                            "|",
                            "touppercase",
                            "tolowercase",
                            "|",
                            "link",
                            "unlink",
                            "anchor",
                            "|",
                            "imagenone",
                            "imageleft",
                            "imageright",
                            "imagecenter",
                            "|",
                            // "simpleupload",
                            "insertimage",
                            //"emotion",
                            //"scrawl",
                            //"insertvideo",
                            //"music",
                            //"attachment",
                            //"map",
                            //"gmap",
                            //"insertframe",
                            // "webapp",
                            "pagebreak",
                            "template",
                            "background",
                            "|",
                            //"insertcode",
                            "horizontal",
                            "date",
                            "time",
                            "spechars",
                            //"snapscreen",
                            //"wordimage",
                            "|",
                            "inserttable",
                            "deletetable",
                            "insertparagraphbeforetable",
                            "insertrow",
                            "deleterow",
                            "insertcol",
                            "deletecol",
                            "mergecells",
                            "mergeright",
                            "mergedown",
                            "splittocells",
                            "splittorows",
                            "splittocols",
                            "charts",
                            "|",
                            //"print",
                            "preview",
                            "searchreplace",
                            //"drafts",
                            //"help"
                        ]
                    ]
                }
                
            }
        },
        watch:{
            value(newContent,oldContent){
                this.$emit('update-value',this.name,newContent);

                //$attrs.value ,v-model surport
                this.$emit('input',newContent);
            }
        },
        methods:{
           
        },
        mounted(){
            console.log('vue-neditor-wrap mounted');
        },
        created(){
            //$attrs.value ,v-model surport
            let defaultvalue = (this.$attrs.value!==undefined&&this.$attrs.value)||this.defaultcontent||'';
            this.value = defaultvalue;
        },
        updated(){
            this.value = this.$attrs.value||'';
        }
    }


</script>