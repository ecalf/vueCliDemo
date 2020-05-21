<template>
    <FileUploadWrap @after-upload="afterUpload" v-bind:type="type">
        <template v-slot:default="slotProps">
            <div class="upload-title">{{title}}</div>
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
                value:''
            }
        },
        methods:{
            afterUpload(imgurl){    
                this.value = imgurl;
                this.$emit('update-value',this.name,imgurl);
                this.$emit('input',imgurl);

            }
        }
        
    }

</script>
