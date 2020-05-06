<template>
    <section class="form-wrap">
        <div class="form-title">{{title}}</div>
        <slot name="default"></slot>
    </section>
</template>


<style lang="scss" scoped>
    .form-wrap{
        padding:25px 25px 30px 25px;
        background-color: #fff;
        .form-title{
            margin-bottom:20px;
            height: 24px;
            line-height: 24px;
            font-size: 18px;
            color:#4E5A65;
        }
    }

    

</style>

<script>
export default {
    components:{},
    data(){
        return {};
    },
    props:{
        title:String
    },
    computed:{

    },
    methods:{

    }

}

</script>