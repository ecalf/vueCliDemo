<template>
<div class="filter-container">

    <FilterCascade 
        label="品类" 
        name="category" 
        v-bind:list="categories" 
        @update-value="updateValue" 
        />

    <div>
        <FilterMenu 
            label="品牌" 
            name="brand" 
            v-bind:list="brands" 
            @update-value="updateValue" 
            />

    </div>

    <div>
        <FilterMenu 
            label="状态" 
            name="state"  
            v-bind:list="states" 
            @update-value="updateValue" 
            />
    </div>

    <div>
        <FilterSearch  />
    </div>


</div>
</template>




<script>
    import FilterCascade from "@components/FilterCascade";
    import FilterMenu from "@components/FilterMenu";
    import FilterSearch from "@components/FilterSearch";





    export default {
        components:{
            FilterCascade,
            FilterMenu,
            FilterSearch
        },
        props:{
            categories:Array,
            brands:Array,
            states:Array
        },
        data(){
            return {

            }
        },
        methods:{
            updateValue(name,value){
                console.log('FilterMultiple updateValue',name,value);
            }
        },
        created(){
            console.log('categories>>>',this.categories)
        }

    };
</script>







<style lang="scss" scoped>
 @import "../assets/css/variables.scss";
.filter-container{
    padding: 30px 25px;
    background: $bgwhite;
}


</style>