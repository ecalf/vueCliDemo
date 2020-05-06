<template>
  <div class="product-details commonweb">
    <div class="crumbs">
      <a href>商品详情</a>
      <i class="iconfont iconjiantou1"></i>
      <a href>呼吸机</a>
    </div>
    <div class="prodetatils-box clearfix">
      <div class="prodetatils-img">
        <p class="large-box">
          <img class="large-img" src="@assets/images/productimg7.png" alt />
        </p>
        <ul class="small-img clearfix">
          <li>
            <img src="@assets/images/productimg7.png" alt />
          </li>
          <li>
            <img src="@assets/images/productimg7.png" alt />
          </li>
          <li>
            <img src="@assets/images/productimg7.png" alt />
          </li>
          <li>
            <img src="@assets/images/productimg7.png" alt />
          </li>
        </ul>
      </div>
      <div class="prodetatils-conetent">
        <h1 class="prodetail-title">
          鱼跃呼吸机家
          <i class="highcolor">医用</i>正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压
        </h1>
        <p
          class="prodetail-dec"
        >鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450 鱼跃呼吸机家医用正压</p>
        <div class="prodetail-price">
          <span class="new-price">
            优惠价
            <i>￥</i>
            <strong>200,000</strong>
          </span>
          <span class="old-price">
            市场价
            <i>￥</i>
            <em>200，000</em>
          </span>
        </div>
        <div class="prodetail-other">
          <span class="authent">
            认证：
            <img src="@assets/images/inicon13.png" alt />
            <img src="@assets/images/inicon11.png" alt />
            <img src="@assets/images/inicon12.png" alt />
          </span>
          <span>品牌：鱼跃</span>
          <span>应用类型：医用</span>
          <span>出口国：英国</span>
        </div>
        <div class="prodetail-num">
          数量：
          <input type="text" value="1" />个
          <span>库存150个</span>
          <span>2020.02.05-2020.04.06</span>
        </div>
        <div class="prodetail-btn">
          <a href class="contact-btn">立即联系</a>
          <a href class="buy-btn">委托购买</a>
        </div>
      </div>
    </div>
    <!--公司主页介绍-->
    <div class="company-info clearfix">
      <a href class="enter-page">进入企业主页</a>
      <div class="company-type">
        <h2 class="company-title">深圳迈万和优采股份有限公司</h2>
        <span>工厂</span>
        <span>广州</span>
        <span>企业主营： 口罩，防护服，呼吸机</span>
      </div>
      <div
        class="company-dec"
      >万合国际供应链投资（深圳）有限公司创立于20018年11月19日。自成立以来，万合专注于服务质量的提升，已积累国际供应链服务21年的行业经验，与2018年成立全流程服务的，凭借卓越的物流供应链服务和持续创新的技术应用，与诸多产业客户建立了长期深度合作...</div>
      <p class="company-msg">
        <span>联系人：张女士</span>
        <span>电话：0755-8888 888</span>
        <span>地址：深圳市福田区天安国际大厦6楼405号</span>
      </p>
    </div>
    <div class="prodetatils-info clearfix">
      <div class="prodetatils-left">
        <h4 class="deatils-title">
          商品详情
          <span>Product details</span>
        </h4>
        <div class="deatils-content">
          <img src="@assets/images/productimg8.png" alt />
        </div>
      </div>
      <div class="prodetatils-right index-prolist">
        <ul class="clearfix">
          <li>
            <a href>
              <p class="thumb">
                <img src="@assets/images/productimg4.jpg" alt />
              </p>
              <h3 class="inpro-title">
                <span class="kicon iconannoyed">急</span>
                这款呼吸机 卖疯了这款呼这款呼吸机 卖疯了这款呼这款
              </h3>
              <p class="price">
                <span>
                  <i>￥</i>200,000
                </span>
                <span class="old-price">
                  <i>￥</i>
                  <em>200,000</em>
                </span>
              </p>
            </a>
          </li>
          <li>
            <a href>
              <p class="thumb">
                <img src="@assets/images/productimg4.jpg" alt />
              </p>
              <h3 class="inpro-title">
                <span class="kicon iconannoyed">急</span>
                这款呼吸机 卖疯了这款呼这款呼吸机 卖疯了这款呼这款
              </h3>
              <p class="price">
                <span>
                  <i>￥</i>200,000
                </span>
                <span class="old-price">
                  <i>￥</i>
                  <em>200,000</em>
                </span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
/*产品详情*/
.product-details {
  padding: 40px 0 50px;
}
.crumbs {
  margin-bottom: 3px;
  a {
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

.prodetatils-box {
  padding: 25px;
  margin-bottom: 10px;
  border-radius: 3px;
  background: #fff;
}
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
    &:hover {
      border-color: $ac;
    }
    img {
      width: 56px;
      height: 56px;
    }
  }
}
.prodetatils-conetent {
  overflow: hidden;
  padding: 20px 0 0;
  color: #4e5a65;
}
.prodetail-title {
  font-size: 18px;
  color: #3d3938;
  font-weight: bold;
  margin: 0 0 15px;
  i {
    font-style: normal;
    color: $ac;
  }
}
.prodetail-dec {
  margin-bottom: 25px;
}
.prodetail-price {
  padding: 7px 20px;
  background-color: #eaeced;

  i,
  strong,
  em {
    vertical-align: middle;
    font-style: normal;
  }
  .new-price {
    padding-right: 24px;

    i {
      font-size: 20px;
      color: $ac;
    }
    strong {
      font-size: 37px;
      color: $ac;
    }
  }
  .old-price {
    i {
      font-size: 12px;
    }
    em {
      text-decoration: line-through;
    }
  }
}

.prodetail-other {
  padding: 30px 0 10px;
  span {
    padding-right: 30px;
    vertical-align: middle;
    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
}

.prodetail-num {
  input {
    width: 57px;
    height: 25px;
    border-radius: 3px;
    border: solid 1px #a6acb1;
    margin: 0 5px 0 3px;
    padding-left: 2px;
  }
  span {
    padding-left: 20px;
    font-size: 12px;
  }
}
.prodetail-btn {
  padding-top: 37px;
  a {
    display: inline-block;
    width: 180px;
    height: 50px;
    border-radius: 3px;
    border: solid 1px #44a78d;
    margin-right: 10px;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
    background: rgba(68, 167, 141, 0.2);
    transition: all 0.3s;
    color: $ac;
    &:hover {
      background: $ac;
      color: #fff;
    }
  }
}

/*公司主页介绍*/
.company-info {
  padding: 25px;
  background: #fff;
  color: #4e5a65;
  margin-bottom: 10px;
}
.company-type {
  .company-title {
    font-size: 22px;
    color: #4e5a65;
    display: inline-block;
    vertical-align: -4px;
    margin-right: 24px;
  }
  span {
    padding: 6px 7px;
    border-radius: 3px;
    border: solid 1px #44a78d;
    margin: 0 5px;
    color: $ac;
  }
}

.company-dec {
  max-width: 624px;
  font-size: 12px;
  padding: 10px 0 8px;
  line-height: 16px;
}
.company-msg {
  span {
    margin-right: 10px;
  }
}

.enter-page {
  float: right;
  padding: 13px 26px;
  line-height: 24px;
  font-size: 18px;
  background: rgba(68, 167, 141, 0.2);
  transition: all 0.3s;
  border-radius: 3px;
  border: solid 1px #44a78d;
  color: #44a78d;
  margin-top: 25px;
  &:hover {
    background: $ac;
    color: #fff;
  }
}

/*商品详情介绍*/
.prodetatils-info {
}
.prodetatils-left {
  width: 930px;
  float: left;
  padding: 25px;
  background: #fff;
  margin-right:14px;
}
.deatils-title {
  color: $ac;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
  span {
    font-weight: normal;
    font-size: 18px;
    margin-left: 20px;
  }
}
.deatils-content {
  img {
    max-width: 100%;
  }
}
/*产品列表*/
.index-prolist {
 
  ul {
    li {
      padding: 0 0 10px;
      a {
        display: block;
        background: #fff;
        padding: 0 20px 24px;
        @include imgscale();
        transition: all 0.3s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
        }
        img {
          width: 186px;
          height: 160px;
        }
      }
      .inpro-title {
        color: #4e5a65;
        font-size: 14px;
        @include ml(20px, 2);
        margin-bottom: 5px;
        span {
          vertical-align: middle;
        }
      }
      .price {
        font-size: 22px;
        color: $ac;
        i {
          font-style: normal;
          font-size: 21px;
        }
        .old-price {
          font-size: 16px;
          color: #4e5a65;
          padding-left: 10px;
          i {
            font-size: 12px;
          }
          em {
            font-style: normal;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
.prodetatils-right {
  padding-top: 0;
  overflow: hidden;
}
</style>