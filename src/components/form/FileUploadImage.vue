<template>
    <FileUploadWrap>
        <div class="upload-icon">
            <span class="icon-img"></span>
        </div>
        <div class="upload-title">增加技术参数图片</div>
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

</style>


<script>
    import FileUploadWrap from "./FileUploadWrap.vue";

    export default {
        components:{
            FileUploadWrap
        }, 
        props:{

        },
        data(){
            return {}
        },
        methods:{

        }
    }

</script>
