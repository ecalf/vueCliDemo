<template>
  <!-- <div class="footer">
    <div class="commonweb clearfix">
      <div class="footer-left fl">
        <h2 class="fcompany-title fs24">万合供应链(深圳)有限公司</h2>
        <p>
          COPYRIGHT © 2020 PRO-HIFU MEDICAL TECH. CO., LTD.
          粤ICP备xxxx号
        </p>
      </div>
      <div class="footer-middle fl">
        <p class="code-list">
          <img src="@assets/images/@assets/images/codeimg.jpg" alt />
          <span>扫码关注二维码</span>
        </p>
        <p class="code-list">
          <img src="@assets/images/@assets/images/codeimg.jpg" alt />
          <span>扫码关注二维码</span>
        </p>
      </div>
      <div class="footer-right fr">
        <h5 class="fs24 fcompany-title">联系我们</h5>
        <p class="tel">
          电话：
          <a href="tel:0755-8888 888">0755-8888 888</a>
        </p>
        <p>地址：深圳市福田区杭钢富春商务大厦909</p>
      </div>
    </div>
  </div>-->
  <footer>
    <div class="footer-top">
      <div class="commonweb">
        <div class="footer-logo">
          <img src="@assets/images/footerlogo.png" alt />
          <div class="footer-company">
            <h2>万合国际供应链投资(深圳)有限公司</h2>
            <h3>Wanhe International Supply Chain Investment (Shenzhen) Co., Ltd.</h3>
          </div>
        </div>
        <!--
        <div class="footer-share">
          <a href>
            <img src="@assets/images/inicon5.png" alt />
          </a>
          <a href>
            <img src="@assets/images/inicon4.png" alt />
          </a>
          <a href>
            <img src="@assets/images/inicon6.png" alt />
          </a>
          <a href>
            <img src="@assets/images/inicon7.png" alt />
          </a>
          <a href>
            <img src="@assets/images/inicon8.png" alt />
          </a>
          <a href>
            <img src="@assets/images/inicon9.png" alt />
          </a>
        </div>
      -->
      </div>
    </div>
    <div class="footer-midddle">
      <div class="commonweb">
        <!-- <span>联系我们</span> -->
        <span>电话：400-010-1118</span>
        <span>地址：深圳市福田区杭钢富春大厦909</span>
        <!-- <span class="friend">友情链接</span> -->
        <a href="/tradhall">交易大厅</a>
        <a href="/publish/buy">我要采购</a>
        <a href="/entrust">委托采购</a>
        <a href="/supplier">供应商中心</a>
        <a href="/news">资讯中心</a>
        <a href="/ucenter/member">个人中心</a>
      </div>
    </div>
    <div class="commonweb">
      <p>京ICP备11017824号-4 / 京ICP证130164号 北京市公安局朝阳分局备案编号:110105000501</p>
      <p>Copyright © 2006-2018 ZCOOL 中文 English</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
/*footer*/
footer {
  background: #4e5a65;
  padding: 45px 0 20px;
  color: #a6acb1;
  text-align: center;
  font-size: 12px;
  a {
    color: #a6acb1;
  }
}
.footer-midddle {
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  margin-bottom: 17px;
  a,
  span {
    padding: 0 10px;
  }
  .friend {
    margin-left: 30px;
  }
}
.footer-top {
  padding-bottom: 26px;
}
.footer-logo {
  padding-right: 40px;
  display: inline-block;
  vertical-align: middle;
  /* border-right: solid 1px #a6acb1; */
  img {
    height: 35px;
    margin-right: 20px;
  }
  .footer-company {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 12px;
    }
  }
}

.footer-share {
  display: inline-block;
  vertical-align: middle;
  margin-left: 35px;
  a {
    display: inline-block;
    width: 27px;
    height: 27px;
    border: solid 2px #a6acb1;
    margin: 0 5px;
    vertical-align: middle;
    border-radius: 50%;
    line-height: 22px;
    img {
      height: 20px;
      vertical-align: middle;
    }
  }
}
</style>