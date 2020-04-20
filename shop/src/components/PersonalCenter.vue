<template>
  <div class="personcalcenter">
    <el-container>
      <el-header class="login" height="100px">
        <el-row>
          <el-col :span="6">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar style="margin-top: 15px" :size="70" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </el-col>
          <span key="login" style="color: whitesmoke" @click="Login">{{this.$store.getters.getLoginUserName}}</span>
        </el-row>
      </el-header>
      <el-main style="margin: 0; padding: 0">
        <div class="order">
          <span style="margin-left: 20px; font-size: 12px; line-height: 40px">我的订单</span>
          <span style="margin-right: 20px; float: right;font-size: 16px; line-height: 40px">></span>
          <div style="height: 2px; background-color: rgb(247,247,247)"></div>
          <div class="orderlist">
            <ul  v-for="order in orderlist" :key="order.id">
              <li><i :class="order.icon"></i></li>
              <li><p>{{order.name}}</p></li>
            </ul>
          </div>
          <div style="height: 3px; background-color:rgb(222,224,216)"></div>
        </div>
        <div class="">
          <span style="margin-left: 20px; font-size: 12px; line-height: 40px">我的订单</span>
          <span style="margin-right: 20px; float: right;font-size: 16px; line-height: 40px">></span>
          <div style="height: 2px; background-color: rgb(247,247,247)"></div>
          <div class="orderlist">
            <ul  v-for="order in orderlist" :key="order.id">
              <li><i :class="order.icon"></i></li>
              <li><p>{{order.name}}</p></li>
            </ul>
          </div>
          <div style="height: 3px; background-color: rgb(222,224,216)"></div>
        </div>
        <div class="">
          <span style="margin-left: 20px; font-size: 12px; line-height: 40px">我的订单</span>
          <span style="margin-right: 20px; float: right;font-size: 16px; line-height: 40px">></span>
          <div style="height: 2px; background-color: rgb(247,247,247)"></div>
          <div class="orderlist">
            <ul  v-for="order in orderlist" :key="order.id">
              <li><i :class="order.icon"></i></li>
              <li><p>{{order.name}}</p></li>
            </ul>
          </div>
          <div style="height: 3px; background-color: rgb(222,224,216)"></div>
        </div>
      </el-main>
      <div class="exit" v-if="exit" @click="exitbtn" >退出登录</div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      exit: 'false',
      orderlist: [
        {icon: 'el-icon-coin', name: '待付款'},
        {icon: 'el-icon-truck', name: '待发货'},
        {icon: 'el-icon-takeaway-box', name: '待收货'},
        {icon: 'el-icon-chat-dot-round', name: '待评价'}
      ]
    }
  },
  methods: {
    Login () {
      this.$store.commit('Login', {Username: 'wuyuz'})
      this.exit = !this.exit
      sessionStorage.setItem('user', 'wuyuz')
      console.log(sessionStorage.getItem('user'))
    },
    exitbtn () {
      this.exit = !this.exit
      this.$store.commit('Login', {Username: '点击登录'})
      sessionStorage.clear()
    }
  },
  created () {
    if (sessionStorage.getItem('user') === null) {
      this.exit = false
    } else {
      this.exit = true
    }
  }
}
</script>

<style scoped>
  html,body,div,ul,li,a,p,span{
    margin: 0;
    padding: 0;
  }
  .block {
  }
  .login {
    background-color: rgb(162,23,35);
    line-height: 100px;
    font-size: 16px;
  }
  .order {
    height: 110px;
    background-color: rgb(253,253,253);
    color: rgb(155,155,155);
  }
  .orderlist{
    height: 65px;
  }
  .orderlist ul {
    list-style: none;
    float: left;
    width: 25%;
    text-align: center;
    margin-top: 13px;
  }
  .orderlist li {
  }
  .orderlist i{
    font-size: 30px;
    color: #d20000;
  }
  .orderlist p{
    font-size: 12px;
    color: dimgray;
  }
</style>
