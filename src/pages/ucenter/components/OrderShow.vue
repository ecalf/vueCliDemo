<template>
  <div class="purchase-order">
    <ul>
      <li class="li1 liorder">
        <span class="iconannoyed kicon">急</span>
        <a href class="purtitle ellipsis">demo飞利浦呼吸机</a>
      </li>
      <li class="li2 liorder">
        <span class="medical-use">民用</span>
        <a href class="m-pro-title ellipsis">S9 VPAP ST主机 VPAP ST主机主...</a>
      </li>
      <li class="li3 fs16">1500个</li>
      <li class="li4 fs16">
        <span class="order-price">￥200,000</span>
      </li>
      <li class="li5">2020.02.05-2020.04.06</li>
      <li class="li6 order-btn">
        <a href="javascript:;" class="modify">修改</a>
        <a href="javascript:;" class="upper-shelf">上架</a>
        <!-- <a href="javascript:;" class="lower-shelf">下架</a> -->
        <a href="javascript:;" class="delete">删除</a>
      </li>
    </ul>


    <ul>
      <li class="li1 liorder">
        <span class="iconannoyed kicon">急</span>
        <a href class="purtitle ellipsis">飞利浦呼吸机</a>
      </li>
      <li class="li2 liorder">
        <span class="medical-use">民用</span>
        <a href class="m-pro-title ellipsis">S9 VPAP ST主机 VPAP ST主机主...</a>
      </li>
      <li class="li3 fs16">1500个</li>
      <li class="li4 fs16">
        <span class="order-price">￥200,000</span>
      </li>
      <li class="li5">2020.02.05-2020.04.06</li>
      <li class="li6 order-btn">
        <a href="javascript:;" class="modify">修改</a>
        <a href="javascript:;" class="upper-shelf">上架</a>
        <!-- <a href="javascript:;" class="lower-shelf">下架</a> -->
        <a href="javascript:;" class="delete">删除</a>
      </li>
    </ul>
    <ul>
      <li class="li1 liorder">
        <span class="iconannoyed kicon">急</span>
        <a href class="purtitle ellipsis">飞利浦呼吸机</a>
      </li>
      <li class="li2 liorder">
        <span class="medical-use">民用</span>
        <a href class="m-pro-title ellipsis">S9 VPAP ST主机 VPAP ST主机主...</a>
      </li>
      <li class="li3 fs16">1500个</li>
      <li class="li4 fs16">
        <span class="order-price">￥200,000</span>
      </li>
      <li class="li5">2020.02.05-2020.04.06</li>
      <li class="li6 order-btn">
        <a href="javascript:;" class="modify">修改</a>
        <a href="javascript:;" class="upper-shelf">上架</a>
        <!-- <a href="javascript:;" class="lower-shelf">下架</a> -->
        <a href="javascript:;" class="delete">删除</a>
      </li>
    </ul>
    <ul>
      <li class="li1 liorder">
        <span class="iconannoyed kicon">急</span>
        <a href class="purtitle ellipsis">飞利浦呼吸机</a>
      </li>
      <li class="li2 liorder">
        <span class="medical-use">民用</span>
        <a href class="m-pro-title ellipsis">S9 VPAP ST主机 VPAP ST主机主...</a>
      </li>
      <li class="li3 fs16">1500个</li>
      <li class="li4 fs16">
        <span class="order-price">￥200,000</span>
      </li>
      <li class="li5">2020.02.05-2020.04.06</li>
      <li class="li6 order-btn">
        <a href="javascript:;" class="modify">修改</a>
        <a href="javascript:;" class="upper-shelf">上架</a>
        <!-- <a href="javascript:;" class="lower-shelf">下架</a> -->
        <a href="javascript:;" class="delete">删除</a>
      </li>
    </ul>
    <ul>
      <li class="li1 liorder">
        <span class="iconannoyed kicon">急</span>
        <a href class="purtitle ellipsis">飞利浦呼吸机</a>
      </li>
      <li class="li2 liorder">
        <span class="medical-use">民用</span>
        <a href class="m-pro-title ellipsis">S9 VPAP ST主机 VPAP ST主机主...</a>
      </li>
      <li class="li3 fs16">1500个</li>
      <li class="li4 fs16">
        <span class="order-price">￥200,000</span>
      </li>
      <li class="li5">2020.02.05-2020.04.06</li>
      <li class="li6 order-btn">
        <a href="javascript:;" class="modify">修改</a>
        <a href="javascript:;" class="upper-shelf">上架</a>
        <!-- <a href="javascript:;" class="lower-shelf">下架</a> -->
        <a href="javascript:;" class="delete">删除</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.purchase-order {
  padding-top: 22px;
  ul {
    display: table;
    width: 100%;
    padding: 18px 12px;
    background: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 2px;
    line-height: 24px;
    white-space: nowrap;
    li {
      display: table-cell;
      padding: 0 10px;
      text-align: center;
      &.li1 {
          text-align:left;
        .purtitle {
          width: 120px;
        }
      }
      &.li2 {
          text-align:left;
        .m-pro-title {
          width: 250px;
        }
      }
    }
  }
}
.purtitle {
  padding-left: 15px;
  display: block;
}
.liorder {
  position: relative;
  span {
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.m-pro-title {
  padding-left: 25px;
}
.order-price {
  color: #44a78d;
}
.order-btn {
  a {
    padding-right: 5px;
    &:after {
      content: "|";
      display: inline-block;
      vertical-align: 2px;
      margin-left: 5px;
      color: #3d3938;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
}
.modify {
  color: $ac;
}
.delete {
  color: #fb0a0a;
}
</style>