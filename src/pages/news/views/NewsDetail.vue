<template>
<div>
 <div class="crumbs commonweb">
      <span>新闻详情</span>
      <i class="iconfont iconjiantou1"></i>
      <span>{{details.title}}</span>
    </div>
  <div class="commonweb newsdetail">
   
      <div class="article-title">{{details.title}}</div>
      <div class="news-date">{{details.create_time}}</div>
      <div class="newsdetailB-article" v-html="details.content">{{details.content}}</div>
  </div>
</div>
</template>

<script>
import { getNewsDetails } from "@api/news";
export default {
  data(){
    return{
      details:{},
      id:"",
      html:''
    }
  },
   methods: {
      async NewsDetails() {//国际推荐
      const res = await getNewsDetails({data:{ id:this.id}});
      if (res.code == 200) {
        this.details = res.data;
      }
    },
   },
   created(){
     this.id=this.$route.params;
     this.NewsDetails();
   }

};
</script>

<style lang="scss" scoped>
.crumbs {
  margin-bottom: 3px;
  margin-top:40px;
  a ,span{
    color: #3d3938;
    padding: 0 5px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    &:last-child {
      color: #3d3938;
    }
  }
  i {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
  }
}
.newsdetail{
 padding:30px 0;
 background:#fff;
 margin:15px auto 58px; 
}
.article-title{
  font-size:38px;
  font-weight:bold;
  text-align:center;
  border-bottom:1px solid #EAECED;
  padding-bottom:20px;
   color:#4E5A65;
}
.news-date{text-align: center;margin-top:20px;}
.newsdetailB-article{
  padding:20px  100px;
  color:#4E5A65;
  font-size:14px;
  line-height:1.6;
  
  img{
    max-width:100%;
  }
}
</style>