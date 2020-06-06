<template>
  <div class="comnews-type-list yitype gjtype zctype hytype gstype">
      <ul>
        <li class="clearfix" v-for="item in list" :key="item.id">
          <span class="date">
            <em>{{item.cate_id.substring(0,2)}}</em> {{item.create_time.substring(0,10)}}
          </span>
          <router-link :to="'/news/detail/'+item.id">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:Array
    }
}
</script>

<style lang="scss" spode>
.comnews-type-list {
  li {
    border-bottom: solid 1px #eaeced;
    a {
      display: block;
      height: 44px;
      line-height: 44px;
      @include ol();
      font-size: 16px;
      color: #4e5a65;
      &:hover {
        color: $ac;
      }
    }
    .date {
      display: block;
      float: right;
      margin-top: 8px;
      em {
        font-style: normal;
        border-radius: 3px;
        padding: 5px 4px;
        display: inline-block;
        line-height: 16px;
        margin-right: 8px;
      }
    }
  }
}

.yitype {
  ul li {
    em {
      border: solid 1px #44a78d;
      color: #44a78d;
    }
  }
}

.gjtype {
  ul li {
    em {
      border: solid 1px #00cbff;
      color: #00cbff;
    }
  }
}

.zctype {
  ul li {
    em {
      border: solid 1px #446ca7;
      color: #446ca7;
    }
  }
}

.gstype {
  ul li {
    em {
      border: solid 1px #f05926;
      color: #f05926;
    }
  }
}
</style>