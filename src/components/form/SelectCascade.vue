<template>
    <!-- data-count 直接绑定使用prop的 list 数据,防止父组件更新list数据组件不刷新-->
    <div class="menu-container" 
        v-bind:value="$attrs.value"
        v-bind:data-count="list.length"
        >
        <Menu 
            v-for="i of this.deep"
            v-bind:has-split="i!=1" 
            v-bind:data-level="i"
            v-bind:name="'menu_'+i"
            v-bind:key="i"
            v-bind:level="i"
            v-bind:list="menuData['list_'+i]" 
            v-show="menuData['list_'+i].length>0"
            v-model="value[i-1]"
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
        
    }

</style>


<script>
/*********************
//级联菜单数据格式
function getData(){
    let data = [];
    for(let i=0;i<10;i++){
        let cate1 = {
            id:i,
            text:'一级分类'+i,
            child:[]
        }

        for(let j=0;j<10;j++){
            let cate2 = {
                id:j,
                text:'二级分类'+j,
                child:[]
            }

            for(let k=0;k<10;k++){
                let cate3 = {
                    id:k,
                    text:'三级分类'+k
                }
                cate2.child.push(cate3);
            }
            cate1.child.push(cate2);
        }
        data.push(cate1);
    }

    return data;
}

const data = getData();
**************************/

    import Menu from "./Menu";

    export default {
        components:{
            Menu
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
        props:{
            label:String,
            list:Array,
            deep:Number,
            name:String
        },
        computed:{

        },
        methods:{
            initValue(){
                this.value = this.$attrs.value||[];

                let selectedDeep = this.value.length;
                this.menuData.list_1 = this.list;
                this.value.forEach((item,i)=>{
                    if(item.child&&item.child.length&&selectedDeep>i+1){
                        this.menuData['list_'+(i+1+1)] = item.child;
                    }
                });

            },
            updateValue(name,item,level,silent){
                //silent = true,只更新界面，不修改值，用于带值初始化
                console.log('展开子菜单 updateValue',name,item,level);
                //展开子菜单
                if(level<this.deep){
                    this.menuData['list_'+(level+1)] = item.child||[]
                }

                //if(!silent){
                    //清除当前level之以上菜单选中的值
                    this.value = [].concat(this.value.slice(0,level-1),item);
                    this.$emit('update-value',this.name,this.value);
                    this.$emit('input',this.value);
                    //console.log('SelectCascade select  ',this.value);
                //}
                
                
            }

        },
        beforeUpdate(){
            this.initValue();
            console.log('SelectCascade updated  ',this.value,this.menuData);
        },
        created(){
            this.initValue();
        }
    }


</script>