<template>
    <div class="prodetatils-img">
        <p class="large-box">
            <!--/img/productimg7.ebd76f2c.png-->
            <img class="large-img" v-bind:src="list[curIndex]" alt="" />
        </p>
        <ul class="small-img clearfix">
            <li v-for="(imgsrc,index) of list"
                v-bind:key="index"
                v-bind:class="{active:curIndex==index}"
                @click="switchImage(index)"
            >
                <img v-bind:src="imgsrc" alt="" />
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
.prodetatils-img {
  width: 400px;

  overflow: hidden;
  float: left;
  border-radius: 3px;
  margin-right: 35px;
  .large-box {
    .large-img {
      width: 400px;
      height: 400px;
    }
  }
}

.small-img {
  padding: 9px 0 0;
  margin: 0 -4px;
  li {
    float: left;
    width: 56px;
    height: 56px;
    border-radius: 3px;
    border: solid 1px #eaeced;
    margin: 0 4px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
    &.active,&:hover {
      border-color: $ac;
    }

    img {
      width: 56px;
      height: 56px;
    }
  }
}
</style>


<script>
    export default {
        props:{
            list:Array
        },
        data(){
            return {
                curIndex:0
            }
        },
        methods:{
            switchImage(index){
                this.curIndex = index;
            }
        }

    }


</script>