<template>
    <div class="form-row">
        <slot name="default"></slot>
    </div>
</template>


<style lang="scss" scoped>
    .form-row{
        margin:15px auto ;
        justify-content: flex-start;
        align-items: center;
        display: flex;
    }

</style>


<script>
    
    export default {
        components:{},
        props:{

        },
        data(){
            return {};
        },
        computed:{

        },
        methods:{

        }
        


    }


</script>