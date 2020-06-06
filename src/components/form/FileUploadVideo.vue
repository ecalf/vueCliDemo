<template>
    <div class="upload-container" v-bind:data-value="$attrs.value">
        <FileUploadWrap @after-upload="afterUpload">
            <template v-slot:default="slotProps">
                <div class="upload-handler" v-show="!value">
                    <div class="upload-icon" >
                        <span class="icon-img"></span>
                    </div>
                  
                    <div class="upload-title">{{title}}</div>
                    <p class="upload-url">test slotProps:{{slotProps.uploadedurl}}</p>
                </div>
                <div class="upload-handler upload-showing" v-show="value">
                    <div class="upload-icon">
                        <video class="file-show" v-bind:src="value" controls="controls" @click.stop="play($event)" />
                    </div>
                    <div class="upload-title">{{title}}</div>
                </div>
            </template>
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

        .upload-handler{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
        }



        .upload-icon{
            position: relative;
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

            .file-show{
                position: absolute;
                top:0;
                max-width:144px;
                max-height: 122px;
                z-index:9;
            }


        }

        .upload-showing{
            .upload-icon{
                margin-bottom: 0;
            }
            .upload-title{
                height:26px;
                line-height: 26px;
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
        

        .upload-url{
            display:none;
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
            name:String,
            title:String
        },
        data(){
            return {
                value:'https://www.w3school.com.cn/i/movie.ogg'
            }
        },
        methods:{
            play(e){
                e.stopPropagation();
                return false;
            },
            afterUpload(url){    
                this.value = url;
                this.$emit('update-value',this.name,url);
                this.$emit('input',url);

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
