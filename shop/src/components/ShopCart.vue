<template>
  <div class="shopcart">
    <router-link to="/personcalcenter">
      <el-row>
        <el-button v-show="Loginbtn = true" round type="info" v-if="login">登录</el-button>
      </el-row>
    </router-link>
    <ul>
      <li>商品id：{{this.$store.state.shopid}}</li>
      <li>商品价格：{{this.$store.state.shopprice}}</li>
      <li>商品名称：{{this.$store.state.shopname}}</li>
      <li>商品数量：{{this.$store.state.shopnum}}</li>
      <li>总价：{{totalnum}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  data () {
    return {
      login: true,
      shopid: '',
      shopprice: '',
      shopnum: '',
      totalnum: ''
    }
  },
  created () {
    if (sessionStorage.getItem('user') === null) {
      this.login = true
      this.message = '还没有登录'
    } else {
      this.login = false
      this.message = '去添加点什么吧'
    }
    this.$store.dispatch('getshopid', {aaa: this.$store.state.chooseid.id})
    this.$store.dispatch('getshopprice', {bbb: this.$store.state.chooseid.price})
    this.$store.dispatch('getshopname', {ccc: this.$store.state.chooseid.name})
    this.totalnum = this.$store.state.shopprice * this.$store.state.shopnum
  }
}
</script>

<style scoped>
  html,body,div,ul,li,a,p,span{
    margin: 0;
    padding: 0;
  }
  .shopcart{
    width: 100%;
    text-align: center;
    color: darkgray;
    margin-top: 40%;
  }
</style>
