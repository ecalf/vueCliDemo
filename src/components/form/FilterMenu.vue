<template>
    
    <dl class="class-list">
        <dt v-if="!!label">{{label}}</dt>
        <dd>
            <div class="first-level border-line" v-bind:class="{unfold:unfold}" >
              <span class="class-more"  v-bind:class="{'more-handler':hasMore}" @click="trigger()">
                更多
                <i></i>
              </span>

              <div class="item-height" ref="itemHeight">
                <div class="item-holder"  ref="itemHolder">
                    <a 
                    href="javascript:;"  
                    v-for="item of list"
                    v-bind:key="item.id"
                    v-bind:data-value="item.id"
                    v-bind:class="{active:value.id==item.id}"
                    @click="onselect($event,item)"

                    >{{item.text}}</a>
                </div>
               
              </div>
            </div>
        </dd>
    </dl>

</template>


<style lang="scss" scoped>      
    .class-list {
        background: $bgwhite;
        font-size: 12px;
        line-height: 22px;
        padding: 6px 0 0 65px;
        border-top: 1px dashed #eaeced;
        position: relative;

        dt {
            position: absolute;
            left: 0;
            top: 6px;
            width: 45px;
            height: 24px;
            border: solid 1px #eaeced;
            text-align: center;
            cursor: default;
        }

        dd {
        overflow: hidden;
        a {
          display: inline-block;
          padding: 0 5px;
          border-radius: 3px;
          border: solid 1px #eaeced;
          margin: 0 2px 6px;
          &:hover,&.active {
            border-color: $ac;
            font-weight: bold;
            color: $ac;
          }
        }
    }

    .class-more {
        display: none;
        position: absolute;
        right: 25px;
        border: solid 1px #eaeced;
        padding: 0 8px;
        cursor: pointer;

        i {
            position: relative;
            top:0;
            display: inline-block;
            vertical-align: 2px;
            margin-left: 5px;
            width: 8px;
            height: 8px;
            border-left: 1px solid #707070;
            border-bottom: 1px solid #707070;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
        }

        &:hover{
            color:$ac;
            border-color:$ac;
            i{
                border-color:$ac;    
            }
        }
    }


    .more-handler{
        display: inline-block;
    }

    .item-height{
            width: 990px;
            height: 30px;
        }

    }

    .unfold{
        .item-height{
             height: auto;
        }

        .class-more{
            i{
                top:3px;
                transform: rotate(-225deg);
            }
        }
    }
</style>


<script>
    export default {
        props:{
            label:String,
            name:String,
            list:Array,
            level:Number,
            hasSplit:Boolean
        },
        data(){
            return {
                value:'',
                hasMore:false,
                unfold:false
            }
        },

        watch:{
            list(){
                this.hasMore = false;
                this.unfold = false;
                this.value = '';
            }
        },
        
        methods:{
            judgeMoreItem(){
                if(this.hasMore){
                    return true;
                }

                if(this.$refs.itemHolder&&this.$refs.itemHeight){
                    const holderRect = this.$refs.itemHolder.getBoundingClientRect();
                    const heightRect = this.$refs.itemHeight.getBoundingClientRect();
                    return holderRect.height>heightRect.height;
                }else{
                    return false;
                }
            },
            trigger(){
                this.unfold = !this.unfold;
            },
            onselect(e,item){
                this.value=item;
                this.$emit('update-value',this.name,item,this.level);
            }
        },
        mounted(){
            this.hasMore = this.judgeMoreItem();
        },
        updated(){
            this.hasMore = this.judgeMoreItem();
        }
    }


</script>