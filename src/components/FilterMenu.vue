<template>
    
    <dl class="class-list">
          <dt v-if="!!label">{{label}}</dt>
          <dd>
            <div class="first-level border-line">
              <span class="class-more" @click="trigger()">
                更多
                <i></i>
              </span>

              <div class="item-height" v-bind:class="{unfold:unfold}" >
                <a 
                href="javascript:;"  
                v-for="item of list"
                v-bind:key="item.id"
                v-bind:data-value="item.id"
                v-bind:class="{active:value==item.id}"
                @click="onselect"
                >{{item.text}}</a>
               
              </div>
            </div>
          </dd>
        </dl>

</template>


<style lang="scss">      
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
        position: absolute;
        right: 25px;
        border: solid 1px #eaeced;
        display: inline-block;
        padding: 0 8px;
        cursor: pointer;

        i {
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
    }

    .item-height{
            width: 990px;
            height: 30px;
            &.unfold{
                height: auto;
            }
        }

    }
</style>


<script>
    export default {
        props:{
            label:String,
            name:String,
            list:Array
        },
        data(){
            return {
                value:'',
                unfold:false
            }
        },
        methods:{
            trigger(){
                this.unfold = !this.unfold;
            },
            onselect(item){
                this.value=item.id;
                this.$emit('update-value',this.name,item);
            }
        }
    }


</script>