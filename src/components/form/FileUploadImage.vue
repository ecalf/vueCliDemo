<template>
    <FileUploadWrap @after-upload="afterUpload" v-bind:value="$attrs.value">
        <template v-slot:default="slotProps">
            <div class="upload-icon" v-show="!value">
                <span class="icon-img"></span>
            </div>
            <div class="upload-icon upload-icon-showing" v-show="value">
                <img class="file-show" v-bind:src="value" />
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

            .file-show{
                max-width:144px;
                max-height: 122px;
            }

            &.upload-icon-showing{
                align-items: flex-start;
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
                value:''
            }
        },
        methods:{
            afterUpload(imgurl){    
                this.value = imgurl;
                this.$emit('update-value',this.name,this.value);
                this.$emit('input',this.value);

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
