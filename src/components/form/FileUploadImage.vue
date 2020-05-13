<template>
    <FileUploadWrap @after-upload="afterUpload">
        <template v-slot:default="slotProps">
            <div class="upload-icon" v-show="!imgurl">
                <span class="icon-img"></span>
            </div>
            <div class="upload-icon" v-show="imgurl">
                <img class="img-show" v-bind:src="imgurl" />
            </div>
            <div class="upload-title">{{title}}</div>
            <p class="upload-url">test slotProps:{{slotProps.uploadedurl}}</p>
        </template>
    </FileUploadWrap>
</template>



<style lang="scss" scoped>
        .upload-icon{
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            .icon-img{
                display: inline-block;
                width: 55px;
                height: 55px;
                background-image: url(~@assets/images/icon/upload.png);
                opacity: 0.47;
            }

            .img-show{
                max-width:144px;
                max-height: 122px;
                z-index:9;
            }
            
        }

        

        .upload-title{
            width:100%;
            height:26px;
            text-align: center;
            font-size: 12px;
            line-height: 26px;
            color:$fontColor;
            background:rgba(234,236,237,0.47);
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
            name:String,
            title:String

        },
        data(){
            return {
                imgurl:''
            }
        },
        methods:{
            afterUpload(imgurl){    
                this.imgurl = imgurl;
                this.$emit('update-value',this.name,imgurl);

            }
        }
        
    }

</script>
