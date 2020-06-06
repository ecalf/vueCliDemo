<template>
    <FileUploadWrap 
        @before-upload="beforeUpload"
        @after-upload="afterUpload" 
        @upload-error="uploadError"
        v-bind:data-value="$attrs.value"
        v-bind:type="type">
        <template v-slot:default="slotProps">
            <div class="upload-title">{{stateText}}</div>
            <p class="upload-url">test slotProps:{{slotProps.uploadedurl}}</p>
        </template>
    </FileUploadWrap>
</template>



<style lang="scss" scoped>
        .upload-title{
            width:100%;
            height: 100%;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            line-height: 40px;
            color:$fontColor;
            background-color:#EAECED;

        }

        .upload-url{
            display:none;
        }

</style>


<script>
    import FileUploadWrap from "./FileUploadWrap.vue";

    export default {
        components:{
            FileUploadWrap
        }, 
        props:{
            type:String,
            name:String,
            title:String

        },
        data(){
            return {
                state:{
                    code:0,
                    text:[this.title||'请选择上传文件','文件正在上传...','文件已成功上传','文件上传失败']
                },
                value:''
            }
        },
        computed:{
            stateText(){
                return this.state.text[this.state.code];
            }
        },
        methods:{
            beforeUpload(file){
                this.state.code = 1;
            },
            afterUpload(imgurl){   
                this.state.code = 2; 
                this.value = imgurl;
                this.$emit('update-value',this.name,imgurl);
                this.$emit('input',imgurl);

            },
            uploadError(error,file){
                console.log(error,file);
                this.state.code = 3;
            }
        },
        updated(){
            this.value = this.$attrs.value;
        },
        created(){
            this.value = this.$attrs.value;
        }
        
    }

</script>
