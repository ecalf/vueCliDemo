<template>
   <div class="search-wrap" v-bind:style="mapStyle">
       <input v-model="value" type="text" name="search-field" class="search-field" placeholder="类目搜索可直接输入产品名称" />
       <button class="search-button" @click="search($event)">搜索</button>
   </div>
</template>


<style lang="scss" scoped>
    .search-wrap{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width:690px;
        height:40px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(234,236,237,1);
        border-radius:3px;

        .search-field{
            padding:0 6px; 
            height:40px;
            font-size:14px;
            line-height: 40px;
            flex:1;
        }

        .search-button{
            width:46px;
            height:40px;
            background:rgba(68,167,141,1);
            border-radius:3px;
            font-size:14px;
            line-height: 40px;
            color:rgba(254,254,254,1);
            cursor: pointer;
        }
    }
    

</style>

<script>
export default {
    components:{},
    props:{
        name:String
    },
    data(){
        return {
            value:'',
            defaultWidth:690,
            mapStyle:{
                width:(this.width||this.defaultWidth)+'px'
            }
        };
    },
    props:{
        width:String
    },
    computed:{

    },
    methods:{
        search(e){
            console.log('search keyword ',this.value);

            //test,如果不在本空间显示搜索结果时约定以事件 update-value 传参...
            let result = [];
            this.$emit('update-value',this.name,{keyword:value,result:result});
            this.$emit('input',{keyword:value,result:result});
        }
    }

}

</script>