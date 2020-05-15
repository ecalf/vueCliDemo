<template>
  <!--分类管理-->
  <div class="classification">
    <dl class="class-list">
      <dt>品类</dt>
      <dd>
        <div class="first-level border-line">
          <span class="class-more">
            更多
            <i></i>
          </span>
          <div class="item-height">
            <a href>药品</a>
            <a href>试剂</a>
            <a href>消杀用品/主要原料/包装材料</a>
            <a href>防护用品/主要原料/生产设备</a>
            <a href>专用车辆/装备/仪器/关键元器件</a>
          </div>
        </div>
      </dd>
    </dl>
    <dl class="class-list">
      <dd>
        <div class="first-level border-line">
          <span class="class-more">
            更多
            <i></i>
          </span>
          <div class="item-height">
            <a href>一般治疗及重型、危重型病例治疗药品</a>
            <a href>中医治疗药品</a>
            <a href>中药材原料</a>
          </div>
        </div>
      </dd>
    </dl>
    <dl class="class-list">
      <dd>
        <div class="first-level border-line">
          <span class="class-more">
            更多
            <i></i>
          </span>
          <div class="item-height">
            <a href>α-干扰素</a>
            <a href>洛匹那韦利托那韦片（盒）</a>
            <a href>抗菌药物</a>
            <a href>甲泼尼龙</a>
            <a href>糖皮质激素等经卫生健康</a>
            <a href>药监部门依程序确认治疗有效的药品和疫苗</a>
          </div>
        </div>
      </dd>
    </dl>
    <dl class="class-list">
      <dt>品牌:</dt>
      <dd>
        <div class="first-level border-line">
          <span class="class-more">
            更多
            <i></i>
          </span>
          <div class="item-height">
            <a href>鱼跃</a>
            <a href>迈瑞</a>
            <a href>飞亚达</a>
          </div>
        </div>
      </dd>
    </dl>
    <dl class="class-list">
      <dt>状态:</dt>
      <dd>
        <div class="first-level border-line">
          <span class="class-more">
            更多
            <i></i>
          </span>
          <div class="item-height">
            <a href>进行中</a>
            <a href>已截止</a>
          </div>
        </div>
      </dd>
    </dl>
    <div class="other-condition">
      <a href>综合排序</a>
      <a href class="active">
        剩余时间
        <i></i>
      </a>
      <a href>
        价格
        <i></i>
      </a>
      <form class="condsearch-box">
        <input type="text" placeholder />
        <button>搜索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
 @import "../assets/css/variables.scss";
/*分类管理*/
.classification {
  padding: 30px 25px;
  background: $bgwhite;
  font-size: 12px;
}
.class-list {
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
  }
  dd {
    overflow: hidden;
    a {
      display: inline-block;
      padding: 0 5px;
      border-radius: 3px;
      border: solid 1px #eaeced;
      margin: 0 2px 6px;
      &:hover,
      &.active {
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
}


</style>