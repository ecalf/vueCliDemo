<template>
  <!--业务精选-->
   <div class="column-business oh">
            <div class="column-title clearfix">
                <div class="right-msg fr">
                    <span>总业务数量：1200</span>
                    <a href="" class="release-btn"><i></i>我要发布</a>
                </div>
                <h3 class="business-title fs-bule"><i class="iconfont iconzu304"
                        style="background-color:#44A78D;"></i>业务精选<em>优选</em></h3>
            </div>
            <div class="product-list clearfix">
                <div class="pro-list-item">
                    <div class="pro-left-item fl">
                        <a href="">
                            <img src="@assets/images/productimg1.jpg" alt="">
                            <div class="pro-item-content">
                                <h3><span>医用口罩</span></h3>
                                <p class="dec">
                                    <span>优质商品</span>
                                    <span>闪电发货</span>
                                    <span>下游爆款</span>
                                    <span>数据选品</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <ul class="pro-right-item fl">
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200,000</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="pro-list-item">
                    <div class="pro-left-item fl">
                        <a href="">
                            <img src="@assets/images/productimg1.jpg" alt="">
                            <div class="pro-item-content">
                                <h3><span>呼吸机</span></h3>
                                <p class="dec">
                                    <span>优质商品</span>
                                    <span>闪电发货</span>
                                    <span>下游爆款</span>
                                    <span>数据选品</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <ul class="pro-right-item fl">
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="thumb">
                                    <img src="@assets/images/productimg4.jpg" alt="">
                                </p>
                                <h2 class="fs14">这款呼吸机 卖疯了</h2>
                                <p class="price"><i>￥</i>200，000</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';
/*业务精选*/
.column-business {}

.right-msg {
  font-size: 16px;
padding-top:18px;
  .release-btn {
    margin-left: 20px;

    i {
      display: inline-block;
      width: 17px;
      height: 17px;
      background-color: #3d3938;
      vertical-align: middle;
      border-radius:50%;
      margin-right:5px;
      position: relative;
      &:before,&:after{
        content:"";
        width:1px;
        height:10px;
        background:#fff;
        position: absolute;
        left:8px;
        top:4px;
      }
      &:after{
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }
    &:hover{
      color:$ac;
      
      i{
        background-color:$ac;
    }
    }

  }
}
.column-title{
  margin-bottom:16px;
  h3{
    font-size: 30px;
    i{
      width:30px;
      height:30px;
      line-height:30px;
      display: inline-block;
      border-radius:50%;
      vertical-align:middle;
      margin-right:5px;
      color:#fff;
      text-align: center;
    }
    em{
      display: inline-block;
      vertical-align:18px;
      margin-left:4px;
      font-size: 13px;
      font-style:normal;
      width: 38px;
      text-align: center;
      line-height:20px;
  height: 21px;
  color:#fff;
  background: url(~@assets/images/inicon3.png) 0 0 no-repeat;
      
    }
  }
}

.product-list{
  margin:0 -20px;
  overflow: hidden;
 
  .pro-list-item{
    float: left;
    width:50%;
    padding:0 10px;
  a{
    display: block;
  }
  }
}


.pro-left-item{
  width:42%;
  position: relative;
  @include imgscale();
  overflow: hidden;
  img{
    width:252px;
    height:350px;
  }
}
.pro-right-item{
  width:(340%/5.9);
  background-color: #fff;
}

.pro-item-content{
  position: absolute;
  top:38px;
  left:36px;
  padding-right:20px;
  z-index:2;
  color:#fff;
  color: #fefefe;
  h3{
    font-size: 18px;
    position: relative;
    margin-bottom:16px;
    
    span{
      display: inline-block;
      padding-bottom:8px;
      border-bottom:1px solid $ac;
    }
    
    &:before{
      content:"";
      width:6px;
      height:18px;
      display:inline-block;
      vertical-align:-2px;
      background:$ac;
      margin-right:10px;
    }
  }
  .dec{
    span{
      display: inline-block;
      margin-right:15px;
      padding-bottom:8px;
    }
  }
}

.pro-right-item{
  font-size:0;
  padding:12px 14px;
  li{
    display: inline-block;
    text-align: center;
    width:50%;
    vertical-align:top;
    border-right: solid 1px #eaeced;
    border-bottom:1px solid #eaeced;
    padding:0 0 10px;
    font-size:14px;
    @include imgscale();
    &:nth-child(even){
    border-right:0;
  }
  &:nth-child(4n-1),&:nth-child(4n){
border-bottom:0;
  }
    a{
      display: block;
    }
    img{
      width:126px;
      height:109px;
    }
    h2{
      height: 20px;
      line-height:20px;
     @include ol();
     margin-bottom:2px;
    
    }
    .price{
      color:$ac;
      font-weight: bold;;
      i{
        font-size:12px;
        font-style: normal;
      }
    }
  }
}

</style>