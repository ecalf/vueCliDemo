
<template>
    <div class="upload-wrap" @click="openFile">
        <slot name="default" />
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
    export default {
        components:{},
        props:{
            title:String,
            fileAllow:String //文件类型限制
        },
        data(){
            return {
                fileTypes:['image/png','image/jpeg']
            }
        },
        methods:{
            openFile(){
                this.$refs.uploadField.click();
            },
            handleFiles(e){
                let file = e.target.files[0];
                console.log('file>>>',file,file.type);
                this.fileTypes.indexOf(file.type);

                var reader = new FileReader(); 
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
                    console.log('reader.onload ,result>>>',this.result);
                    console.log(this);
                } 
                reader.readAsText(file); 

            }
        },
        created(){
            if(this.fileAllow){
                this.fileTypes = this.fileAllow.split(',');
            }
            
        }
    }

</script>