<template>

    <section class="form-wrap">
        <div class="form-title" v-bind:style="titleStyle">{{title}}</div>
        <slot name="default"></slot>
    </section>

</template>


<style lang="scss" scoped>
    .form-wrap{
        padding:25px 25px 30px 25px;
        background-color: $bgwhite;
        .form-title{
            height: 45px;
            padding-bottom:20px;
            line-height: 24px;
            font-size: 18px;
            color:$fontColor;
            border-bottom: 1px dotted $borderColor;
        }
    }

    

</style>

<script>

export default {
    components:{
        
    },
    data(){
        return {};
    },
    props:{
        title:String,
        baseline:Boolean
        

    },
    computed:{
        titleStyle(){
            let styleMap = {};
            if(this.baseline===false){
                styleMap['border-bottom'] = 'none';
            }
            return styleMap;
        }
    },
    methods:{

    }

}

</script>