<template>
    <Icon 
        v-bind:border="0" 
        v-bind:radius="0" 
        v-bind="$attrs"
        v-on="$listeners"  
        class="icon-img"
        content=""
    />

</template>

<style lang="scss" scoped>
    .icon-img{
       background-image: url(~@assets/images/icon/editable.png);
    }

</style>>

<script>
    import Icon from "./Icon";
    export default {
        components:{
            Icon
        },
        props:{},
        data(){
            return {}
        },
        methods:{

        }
    }
</script>