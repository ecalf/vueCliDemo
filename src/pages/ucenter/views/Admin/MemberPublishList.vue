<template>
  <div class="mshow-wrap mb20">
    <div class="mshow-nav">
      <a href="javascript:;" v-bind:class="{active:type==1}" @click.stop="switchType(1)">我的采购</a>
      <a href="javascript:;" v-bind:class="{active:type==2}" @click.stop="switchType(2)">我的销售</a>
      <a href="javascript:;" v-bind:class="{active:type==3}" @click.stop="switchType(3)">我的委托</a>
    </div>

    <!--订单-->
    <OrderList v-bind:list="list" v-if="total>0" />
    <Errormsg v-if="total==0" />

    <!--分页 -->
    <div class="layui-box" v-if="Math.ceil(total/page_size)>1">
      <Pagination
        v-bind:inputAllowed="true"
        v-bind:total="total"
        v-bind:size="page_size"
        v-bind:curent="page_index"
        @switch-page="switchPage"
      />
    </div>
  </div>
</template>

<style lang="scss">
.mshow-box {
  margin-bottom: 28px;
}
.mshow-nav {
  margin-bottom: 15px;
  &:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 20px;
    background-color: #479e84;
    margin-right: 10px;
    vertical-align: -4px;
  }

  a {
    color: #707070;
    font-size: 16px;
    padding-right: 35px;
    &:hover,
    &.active {
      color: #44a78d;
    }
  }
}

.mshow-wrap {
  background: #ffffff;
  padding: 15px 15px 30px;
}
</style>


<script>
import OrderList from "@components/OrderList";
import Pagination from "@components/Pagination";
import Errormsg from "@components/Errormsg";

import { getMyNeeds } from "@api/user";

export default {
  components: {
    OrderList,
    Pagination,
    Errormsg
  },
  props: {},
  data() {
    return {
      total: 0,
      page_size: 5,
      page_index: 1,
      type: 1, //1 采购,2 销售,3 委托销售, 4 委托采购
      list: []
    };
  },
  computed: {},
  methods: {
    switchPage(page_index) {
      this.page_index = page_index * 1;
      this.getNeeds();
    },
    switchType(type) {
      this.type = type * 1;
      this.page_index = 1;
      this.getNeeds();
    },
    async getNeeds() {
      let params = {
        page_size: this.page_size,
        page_index: this.page_index,
        type: this.type
      };

      let res = await getMyNeeds({ data: params });

      if (res.code != 200) {
        // this.$message({
        //   showClose: true,
        //   message: res.message,
        //   type: "error"
        // });
      } else {
        let data = res.data;
        let lists = res.data.list;
        this.total = data.total;  
        for (let i = 0; i < lists.length; i++) {
          //数组重组
          let serviceData =
            lists[i].service_cnname != null
              ? lists[i].service_cnname.split(",")
              : "";
          lists[i].service_cnname = serviceData; //得到服务类型数组

          let qualification =
            lists[i].qualification_icon != null
              ? lists[i].qualification_icon.split(",")
              : "";
          lists[i].qualification_icon = qualification; //得到资质类型数组

          let images =
            lists[i].images != null ? lists[i].images.split(",") : "";
          lists[i].images = images; //得到图片数组
        }
         this.list = lists;
         console.log(lists);
      }
    }
  },
  created() {
    this.getNeeds();
  }
};
</script>