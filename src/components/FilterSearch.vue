<template>
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

</template>


<style lang="scss">
.other-condition {
    background: $bgwhite;
    font-size: 12px;
    padding-top: 14px;
    a {
        background-color: #eaeced;
        border-radius: 3px;
        padding: 0 6px;
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin: 0 2px;
    i {
      display: inline-block;
      vertical-align: 3px;
      margin-left: 5px;
      width: 8px;
      height: 8px;
      border-left: 1px solid #707070;
      border-bottom: 1px solid #707070;
      transform: rotate(-45deg);
    }
    &.active {
      color: $ac;
      i {
        transform: rotate(135deg);
        vertical-align: -1px;
        border-color: $ac;
      }
    }
  }
}

.condsearch-box {
    line-height: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #e6e6e6;
    margin-left:10px;

    input {
        width: 120px;
        padding-left: 10px;
        background: url(~@assets/images/inicon10.png) 10px 2px no-repeat;
        background-size: 14px;
    }

    button {
        width: 40px;
        height: 24px;
        background-color: #eaeced;
        border-radius: 0px 3px 3px;
        color: #4e5a65;
    }
}

</style>



<script>
    
    export default {
        props:{

        },
        data(){
            return {

            }
        },
        methods:{

        }

    }

</script>