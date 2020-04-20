<template>
  <div id="app">
    <router-view/>
    <el-footer class="footer" height="45px">
      <!--首页-->
      <router-link to="/">
        <div class="index-icon">
          <ul>
            <li><i class="el-icon-house"></i></li>
            <li>首页</li>
          </ul>
        </div>
      </router-link>
      <!--分类-->
      <router-link to="/classification">
        <div class="classification-icon">
          <ul>
            <li><i class="el-icon-copy-document"></i></li>
            <li>分类</li>
          </ul>
        </div>
      </router-link>
      <!--购物车-->
      <router-link to="/shopcart">
        <div class="shopcart-icon">
          <ul>
            <li><i class="el-icon-shopping-cart-2"></i></li>
            <li>购物车</li>
          </ul>
        </div>
      </router-link>
      <!--个人-->
      <router-link to="/personcalcenter">
        <div class="personcalcenter-icon">
          <ul>
            <li><i class="el-icon-user"></i></li>
            <li>个人</li>
          </ul>
        </div>
      </router-link>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,div,ul,li,a,p,span{
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  i {
    font-size: 22px;
  }
  .index-icon,.classification-icon,.shopcart-icon,.personcalcenter-icon{
    width: 25%;
    text-align: center;
    float: left;
    color: rgb(83,83,83);
    font-size: 10px;
  }
  .index-icon,.classification-icon,.shopcart-icon,.personcalcenter-icon ul{
    margin-top: 5px;
  }
  .footer {
    z-index: 0;
    height: 45px;
    width: 100%;
    background-color: rgb(248,248,248);
    /*底部固定*/
    position: fixed;
    bottom: 0
  }
</style>
