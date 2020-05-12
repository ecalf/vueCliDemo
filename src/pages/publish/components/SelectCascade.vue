<template>
    <div class="menu-container">
        <Menu 
            v-for="i of this.deep"
            v-bind:has-split="i!=1" 
            v-bind:data-level="i"
            v-bind:key="i"
            v-bind:level="i"
            v-bind:list="menuData['list_'+i]" 
            v-show="menuData['list_'+i].length>0"
            
            @update-value="updateValue" 
            />

    </div>

</template>

<style lang="scss" scoped>
    .menu-container{
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        background:rgba(255,255,255,1);
        border:1px solid rgba(234,236,237,1);
        border-radius: 3px;
        margin-left:115px;
    }

</style>


<script>
    import Menu from "./Menu";

    export default {
        components:{
            Menu
        },
        data(){
            let obj = {
                value:{},
                menuData:{}
            };

            for(let i=1;i<=this.deep;i++){
                obj.menuData['list_'+i] = [];
            }
            obj.menuData.list_1 = this.list;

            return obj;
        },
        props:{
            list:Array,
            deep:Number
        },
        computed:{

        },
        methods:{
            updateValue(item,level){
                if(level==1){
                    this.menuData['list_'+(level+1)] = item.child||[]
                }


                this.value['level_'+level] = item;
                for(let i=level+1;i<=this.deep;i++){
                    this.value['level_'+i] = null;
                }

                console.log('this.value>>>',this.value);
                this.$emit('update-value',this.value);
            }


        }
    }


</script>