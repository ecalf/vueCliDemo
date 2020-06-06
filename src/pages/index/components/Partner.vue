<template>
  <ul class="clearfix inpartner-list">
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newparter1.png" alt />
      </a>
    </li>
     <li>
      <a href="javascript:;">
        <img src="@assets/images/newparter4.png" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newparter2.png" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newparter3.png" alt />
      </a>
    </li>
   
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newparter5.png" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newpartner1.jpg" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newpartner2.jpg" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newpartner3.jpg" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newpartner4.jpg" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/newpartner5.jpg" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/partner04.png" alt />
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <img src="@assets/images/partner03.png" alt />
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*合作伙伴*/
.inpartner-list {
  padding-top: 10px;
  li {
    float: left;
    width: (100%/6);
    padding-bottom: 10px;
    a {
      display: block;
      position: relative;
      &:before {
        content: "";
        display: block;
        padding-bottom: 31.25%;
      }
      img {
        display: block;
        width: 100%;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        max-width: 100%;
      }
    }
  }
}
</style>