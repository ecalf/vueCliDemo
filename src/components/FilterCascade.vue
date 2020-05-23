<template>
    <!--分类管理-->
    <div>
        <!-- 一级类 -->
        <FilterMenu label="品类" v-bind:list="list"   />


        <!-- 二级类 -->
        <FilterMenu />

        <!--三级类-->
        <FilterMenu />
    </div>
</template>


<style lang="scss">
    

</style>


<script>
import FilterMenu from "@components/FilterMenu";



export default {
    components:{
        FilterMenu
    },
    props:{
        list:Array

    },
    data(){
        return {

        }
    },
    methods:{

    }
}


</script>