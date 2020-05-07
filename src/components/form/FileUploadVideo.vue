<template>
    <div class="upload-container">
        <FileUploadWrap>
            <div class="upload-icon">
                <span class="icon-img"></span>
            </div>
            <div class="upload-title">上传视频</div>
        </FileUploadWrap>

        <div class="upload-desc">
            <p>1.尺寸：此处可使用1：1或16：9比例视频</p>
            <p>2.时长：≤60s，建议30秒以内短视频可优先展现</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .upload-container{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .upload-icon{
            flex:1;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            width: 100%;
            margin-bottom: 15px;
            .icon-img{
                display: inline-block;
                width: 38px;
                height: 38px;
                background-image: url(~@assets/images/icon/video.png);
                opacity: 0.47;

            }
        }

        .upload-title{
            width:100%;
            height: 46px;;
            text-align: center;
            font-size: 12px;
            line-height: 20px;
            color:$fontColor;
        }

        .upload-desc{
            height:31px;
            font-size:12px;
            font-weight:300;
            line-height:16px;
            color:$fontColor;
        }
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
