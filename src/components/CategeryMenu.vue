<template>
<div class="sup-category">
<h3>品类</h3>
<ul class="sup-ul">
  <li v-for="(item,index) in list" :key="index">
    <div
        class="category-one"
        v-bind:data-id="item.id"
        v-bind:class="{active:indexshow==index,hasChild:!!(item.child&&item.child.length)}"
        @click="subShow(index)"
    >{{item.text}}</div>

    <transition name="sub-comments" v-if="item.child&&item.child.length">
      <div class="ani-height">
        <div
            class="category-two"
            v-bind:data-id="subitem.id"
            v-show="index===indexshow"
            v-for="(subitem,i) in item.child"
            v-bind:key="i"
            v-on:mouseover="showToggle(i)"
            v-on:mouseout="handleHide"
        >
            <a href="javascript:;" class="sub-title">{{subitem.text}}</a>
            <div class="category-three"  v-show="i===isShow" v-if="subitem.child&&subitem.child.length">
                <a
                  href="javascript:;"
                  v-for="(threeitem,j) in subitem.child"
                  v-bind:data-id="threeitem.id"
                  v-bind:key="j"
                >{{threeitem.text}}</a>
            </div>
        </div>
      </div>
    </transition>
  </li>
</ul>
</div>
</template>

<style lang="scss" scoped>
    
.sup-category {
    position: absolute;
    width: 258px;
    left: 50%;
    margin-left: -600px;
    top: 0;
    height: 400px;
    background: #27303e;
    z-index: 99;
    color: #fefefe;
    padding: 15px 0;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;     /*宽:对应竖滚动条尺寸*/
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
         -webkit-box-shadow: inset 0 0 5px #A6ACB1;
        background: #535353;
    }
    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px #EAECED;
        background: #EDEDED;
    }


    h3 {
        font-size: 16px;
        font-weight: bold;
        padding: 0 20px 14px;
      }
}
.sup-ul {
  li {
    .category-one {
      padding: 8px 20px;
      cursor: pointer;
      position: relative;

      &.hasChild{
            &:after {
            content: "";
            display: block;
            position: absolute;
            top: 10px;
            right: 15px;
            width: 8px;
            height: 8px;
            border-top: 1px solid #fefefe;
            border-right: 1px solid #fefefe;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
          }

        &.active {
            &:after {
              top: 15px;
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
            }
          }
        }
      
      
    }
    .sub-title {
      display: block;
      color: #fefefe;
      padding: 0 10px 0 30px;
      height: 32px;
      line-height: 32px;
      @include ol();
    }
  }
}
.category-two {
  position: relative;
  font-size: 12px;
  &:hover {
    .sub-title {
      color: $ac;
      background: #fff;
    }
  }
}
.category-three {
  position: absolute;
  top: 0;
  left: 258px;
  width: 512px;
  background: #fff;
  color: #4e5a65;
  padding: 12px 20px;
  a {
    display: inline-block;
    padding: 4px 5px;
    &:hover {
      color: $ac;
    }
  }
}

.sub-comments-leave-active,
.sub-comments-enter-active {
  transition: max-height 0.5s linear;
}
.sub-comments-enter,
.sub-comments-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

<script>


export default {
    props:{
        list:Array
    },
    data(){
        return {
            isShow: -1,
            indexshow: -1
        }
    },
    methods:{
        showToggle: function(i) {
          this.isShow = i;
        },
        handleHide: function() {
          this.isShow = !this.isShow;
        },
        subShow: function(index) {
          this.indexshow = index;
        }

    }

}

</script>