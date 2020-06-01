<template>
    <div class="other-condition" data-count="config.sequenceList.length">
        <a href="javascript:;">{{label}}</a>
        <a class="sort-btn" href="javascript:;"
            v-for="(item,index) of config.sequenceList"
            v-bind:key="index"
            v-bind:class="{active:sequence[item.name]=='asc'}"
            @click="onselect(item)"
            >
            {{item.text}}
            <i></i>
        </a>
       
        <div class="condsearch-box" v-if="config.search">
            <input type="text" v-model="keyword" placeholder v-bind:name="config.search&&config.search.name||'keyword'" />

            <button type="button" @click="onsearch()">搜索</button>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.other-condition {
    background: $bgwhite;
    font-size: 12px;
    padding-top: 14px;
    a {
        background-color: #eaeced;
        border-radius: 3px;
        padding: 0 6px;
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin: 0 2px;
    }

    .sort-btn{
        i {
          display: inline-block;
          vertical-align: 3px;
          margin-left: 5px;
          width: 8px;
          height: 8px;
          border-left: 1px solid #707070;
          border-bottom: 1px solid #707070;
          transform: rotate(-45deg);
        }

        &.active {
          color: $ac;
          i {
            transform: rotate(135deg);
            vertical-align: -1px;
            border-color: $ac;
          }
        }

        &:hover{
            color:$ac;
            i{
                border-color: $ac;
            }
        }

    }
}

.condsearch-box {
    line-height: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #e6e6e6;
    margin-left:10px;

    input {
        width: 120px;
        padding-left: 10px;
        background: url(~@assets/images/inicon10.png) 10px 2px no-repeat;
        background-size: 14px;
    }

    button {
        width: 40px;
        height: 24px;
        background-color: #eaeced;
        border-radius: 0px 3px 3px;
        color: #4e5a65;

        &:hover{
            color:$ac;
        }
    }
}

</style>



<script>
    
    export default {
        props:{
            label:String,
            config:Object
        },
        data(){
            let sequence = {};
            for(let item of this.config.sequenceList){
                sequence[item.name] = item.order;
            }

            return {
                sequence:sequence,
                keyword:''
            }
        },
        methods:{
            onselect(item){
                this.sequence[item.name] = (this.sequence[item.name]=='asc'?'desc':'asc');                
                this.$emit('update-value',item.name,this.sequence[item.name]);
            },
            onsearch(){
                let name = this.config.search.name;
                let keyword = this.keyword;
                this.$emit('update-value',name,keyword);

            }
        }
        
    }

</script>