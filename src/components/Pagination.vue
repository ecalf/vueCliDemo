<template>
    <div class="layui-laypage">
      <a href="javascript:;" class="layui-laypage-prev" v-show="index>1&&pagecount>5" @click="prev()">
        上一页
      </a>
      <span v-show="min>1">…</span>
      <a v-for="i of buttons"
        href="javascript:;"
        v-bind:key="i" 
        v-bind:class="{'layui-laypage-curr':i==index}" 
        @click="switchPage(i)">{{i}}</a>
      <span v-show="max<pagecount">…</span>
      <a href="javascript:;" class="layui-laypage-next" v-show="index<pagecount&&pagecount>5" @click="next()">
        下一页
      </a>

      <span class="layui-laypage-total" v-if="inputAllowed">
        到第
        <input type="number" v-model="value"/> 页
        <button type="button" class="layui-laypage-btn" @click="jumpe()">确定</button>
      </span>
    </div>
</template>




<script>
    export default {
      props:{
        inputAllowed:Boolean,
        curent:Number,
        size:Number,
        total:Number
      },
      data(){ 
          return {
            numCtrl:2, //控制当前页左右两侧显示的页码按钮
            index:this.curent,
            value:'',
            min:1,
            max:5
          }
      },
      computed:{
        pagecount(){
            return Math.ceil(this.total/this.size);
        },
        buttons(){
          let arr = [];
          let min = Math.max(1,this.index-this.numCtrl);
          let max = Math.min(this.pagecount,this.index+this.numCtrl);

          if(min>this.pagecount-this.numCtrl*2){
            min = this.pagecount-this.numCtrl*2;
          }
          if(max<1+this.numCtrl*2){
            max = 1+this.numCtrl*2;
          }
          this.min = Math.max(1,min);
          this.max = Math.min(this.pagecount,max);


          for(let i=this.min;i<=this.max;i++){
            arr.push(i);
          }

          return arr;
        }
      },
      methods:{
        prev(){
          if(this.index>1){
            this.switchPage(this.index-1);
          }
        },
        next(){
          if(this.index<this.pagecount){
            this.switchPage(this.index+1);
          }
        },
        jumpe(){
          let page = this.value>>0;
          page = Math.max(1,Math.min(this.pagecount,page));
          this.value = page;
          
          if(page!=this.index){
            this.switchPage(page);
          }
          
        },
        switchPage(index){
          this.index = index;
          this.$emit('switch-page',index);
        }
      }
    }

</script>