
<template>
    <div class="upload-wrap" @click="openFold()">
        <slot name="default" v-bind:uploadedurl="value"/>
        <input type="file" ref="uploadField" class="upload-field" @change="handleFiles($event)">
    </div>
</template>


<style lang="scss" scoped>
    .upload-wrap{
        display: flex;
        align-items: flex-end;
        flex-direction: column;

        margin-right:24px;
        width:146px;
        height:150px;
        background:rgba(254,254,254,0.47);
        border:1px dotted rgba(61,57,56,0.47);

        cursor: pointer;
        @include default-radius;

        .upload-field{
            display:none;
        }

    }

</style>



<script>
    import {uploadFile} from "@api/common";

    export default {
        components:{},
        props:{
            title:String,
            maxsize:Number, //最大上传容量,单位KB
            types:String //文件类型限制
        },
        data(){
            return {
                defaultMaxSize:1024*2,//单位KB
                defaultTypes:['image/png','image/jpeg'],
                value:'' //上传后的图片路劲
            }
        },
        methods:{
            openFold(){
                this.$refs.uploadField.click();
            },
            handleFiles(e){
                if(e.target.files.length==0){
                    return false;
                }


                let file = e.target.files[0];
                let maxsize = this.maxsize||this.defaultMaxSize;
                let types = this.types||this.defaultTypes;  

                /*                
                const reader = new FileReader(); 
                reader.onabort = function(){
                    console.log('reader.onabort',this);
                }
                reader.onerror = function(){
                    console.log('reader.onerror',this);
                } 
                reader.onprogress = function(){
                    console.log('reader.onprogress',this);
                }
                reader.onload = function(){  
                    //todo:这个文件类型浏览器是按文件后缀判断的，与file.type一致，严格的判断应该读取文件二进制数据头来判断
                    let typeParse = this.result.match(/data:(.+?);/);
                    let type = typeParse[1];

                    console.log('reader.onload ,result>>>',this.result);
                    console.log('type>>>',type);

                } 
                reader.readAsDataURL(file); 
                */


                if(file.size>maxsize*1024){
                    this.$message({
                        showClose: true,
                        message: "图片大小请限制在2MB以内",
                        type: "error"
                    });
                    return false;
                }else if(types.indexOf(file.type)==-1){
                    this.$message({
                        showClose: true,
                        message: "图片文件类型错误,文件类型请限制为 png,jpeg,webp",
                        type: "error"
                    });
                    return false;
                }else{
                    this.upload(file);
                }

            },
            async upload(file){
                const formdata = new FormData();
                formdata.append('image',file);
                let res = await uploadFile(formdata);

                if(res.code==200){
                    let uploadedurl = res.data.img_url;
                    this.afterUpload(uploadedurl);

                    this.$message({
                        showClose: true,
                        message: "文件上传成功",
                        type: "success"
                    });
                }else{

                }

            },
            afterUpload(uploadedurl){
                this.value = uploadedurl;
                this.$emit('after-upload',uploadedurl);
            }
        }
    }

</script>