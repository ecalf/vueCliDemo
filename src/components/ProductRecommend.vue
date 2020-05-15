<template>
  <!--产品推荐-->
  <ul class="trading-hall-hot clearfix">
    <li class="li1">
      <a href>
        <div class="hall-hot-left">
          <h2 class="title">迈瑞医用呼吸机</h2>
          <p class="dec">一款很牛的呼吸机</p>
          <span class="view">点击查看</span>
        </div>
        <div class="hall-hot-right oh">
          <img src="@assets/images/productimg5.png" alt />
        </div>
      </a>
    </li>
    <li class="li2">
      <a href>
        <div class="hall-hot-left">
          <h2 class="title">迈瑞医用呼吸机</h2>
          <p class="dec">一款很牛的呼吸机</p>
          <span class="view">点击查看</span>
        </div>
        <div class="hall-hot-right oh">
          <img src="@assets/images/productimg6.png" alt />
        </div>
      </a>
    </li>
    <li class="li3">
      <a href>
        <div class="hall-hot-left">
          <h2 class="title">迈瑞医用呼吸机</h2>
          <p class="dec">一款很牛的呼吸机</p>
          <span class="view">点击查看</span>
        </div>
        <div class="hall-hot-right oh">
          <img src="@assets/images/productimg5.png" alt />
        </div>
      </a>
    </li>
    <li class="li4">
      <a href>
        <div class="hall-hot-left">
          <h2 class="title">迈瑞医用呼吸机</h2>
          <p class="dec">一款很牛的呼吸机</p>
          <span class="view">点击查看</span>
        </div>
        <div class="hall-hot-right oh">
          <img src="@assets/images/productimg6.png" alt />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
/*交易大厅-产品推荐*/
.trading-hall-hot {
  margin: 30px 0 15px;
  li {
    float: left;
    width: 25%;
    padding-right: (20%/12);
    border-radius: 3px;

    &:last-child {
      margin-right: 0;
    }
    .title {
      font-size: 16px;
      margin-bottom: 4px;
      @include ol();
      height: 20px;
      line-height: 20px;
    }
    .dec {
      font-size: 12px;
      @include ol();
      height: 20px;
      line-height: 20px;
    }
    .view {
      display: inline-block;
      width: 64px;
      height: 23px;
      border-radius: 3px;
      line-height: 23px;
      text-align: center;
      color: #fefefe;
      margin-top: 30px;

      font-size: 12px;
    }
    a {
      padding: 15px 15px 15px 25px;
      display: block;
    }
    &.li1 {
      a {
        background-color: #e3cfe5;
        color: #ca3f81;
      }
      .view {
        background-image: linear-gradient(270deg, #eaceff 0%, #5a3eaa 100%);
      }
    }
    &.li2 {
      a {
        background-color: #8cd8f8;
        color: #fefefe;
      }
      .view {
        background-image: linear-gradient(270deg, #99c2f2 0%, #367edc 100%);
      }
    }
    &.li3 {
      a {
        background-color: #f1d5b9;
        color: #f05926;
      }
      .view {
        background-image: linear-gradient(270deg, #fce5bc 0%, #c19632 100%);
      }
    }
    &.li4 {
      a {
        background-color: #b0e5d0;
        color: #fefefe;
      }
      .view {
        background-image: linear-gradient(270deg, #a7deba 0%, #739687 100%);
      }
    }
  }
}

.hall-hot-left {
  float: left;
  width: 50%;
  margin-right: 12px;
}
.hall-hot-right {
  img {
    display: block;
    width: 100%;
  }
}
</style>