<template>
    <!--分类管理-->
    <div>
        <!-- data-count 直接使用 prop list,使组件跟随传入的 list 更新  -->
        <FilterMenu 
            v-for="i of this.deep"
            v-bind:label="i==1?label:''" 
            v-bind:name="name"
            v-bind:level="i"
            v-bind:list="menuData['list_'+i]" 

            v-bind:data-count="list.length" 
            v-bind:has-split="i!=1" 
            v-bind:data-level="i"
            v-bind:key="i"
            v-show="menuData['list_'+i].length>0"

            @update-value="updateValue"    />

    </div>
</template>


<style lang="scss" scoped>
    

</style>


<script>
import FilterMenu from "./FilterMenu";



export default {
    components:{
        FilterMenu
    },
    props:{
        label:String,
        name:String,
        deep:Number,
        list:Array

    },
    data(){
         let obj = {
            value:[],//[level1,level2,level3]
            menuData:{}
        };

        for(let i=1;i<=this.deep;i++){
            obj.menuData['list_'+i] = [];
        }

        return obj;
    },
    methods:{
        updateValue(name,item,level){
            //展开子菜单
            if(level<this.deep){
                this.menuData['list_'+(level+1)] = item.child||[]
            }

            //清除当前level之以上菜单选中的值
            this.value = [].concat(this.value.slice(0,level-1),item);
            this.$emit('update-value',this.name,this.value);
        }
    },
    updated(){
        this.menuData.list_1 = this.list;
    }
}


</script>