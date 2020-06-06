<template>
<div class="filter-container">

    <FilterCascade 
        label="品类" 
        name="category" 
        v-bind:list="categories" 
        v-bind:deep="2"
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
        <FilterSearch
            v-bind:label="sequenceConfig.label"
            v-bind:config="sequenceConfig"  
            @update-value="updateValue"
            />
    </div>


</div>
</template>




<script>
    import FilterCascade from "./FilterCascade";
    import FilterMenu from "./FilterMenu";
    import FilterSearch from "./FilterSearch";





    export default {
        components:{
            FilterCascade,
            FilterMenu,
            FilterSearch
        },
        props:{
            categories:Array,
            brands:Array,
            states:Array,
            sequenceConfig:Object
        },
        data(){
            let filterData = {
                category:[],
                brand:'',
                state:'',
                keyword:''
            }

            for(let item of this.sequenceConfig.sequenceList){
                filterData[item.name] = item.order;
            }

            return {
                filterData:filterData
            }
        },
        methods:{
            updateValue(name,value){
                this.filterData[name] = value;

                console.log('FilterMultiple updateValue',name,value);
                console.log('filterData>>>',this.filterData);
                
                this.$emit('on-filter',name,value,this.filterData);
            }
        }

    };
</script>







<style lang="scss" scoped>
.filter-container{
    padding: 30px 25px;
    background: $bgwhite;
}


</style>