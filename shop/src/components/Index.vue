<template>
  <div class="index">
    <el-container>
      <el-header height="210px">
        <el-carousel indicator-position="none" height="210px">
          <el-carousel-item v-for="item in this.newImg" :key="item.id">
            <img :src="item.src">
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-main class="main1" height="210px">
        <div class="word" v-for="word in this.$store.state.newText" :key="word.id">
        <ul>
          <li><i class="el-icon-attract" style="font-size: 24px; color: rgb(18,0,135)"></i></li>
          <li style="color: rgb(37,37,37)">{{word.text}}</li>
        </ul>
        </div>
      </el-main>
      <div class="box1"></div>
      <el-main>
        <div class="shoplist">
          <p>推荐商品</p>
          <div class="list" v-for="list in this.$store.state.newList" :key="list.id">
            <ul>
              <router-link to="../details">
              <li><img :src="list.image"></li>
              <li style="color: black">{{list.name}}</li>
              <li style="color: rgb(182,26,40)">￥{{list.price}}</li>
              </router-link>
            </ul>
          </div>
        </div>
      </el-main>
      <div class="box2"></div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      newImg: [
        {src: require('../assets/1.png')},
        {src: require('../assets/2.png')},
        {src: require('../assets/3.png')}
      ]
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('mock')
  }
}
</script>

<style scoped>
  html,body,div,ul,li,a,p,span{
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .el-header{
    padding: 0;
  }
  .el-main{
    margin: 0;
    padding: 0;
  }
  .main1{
    padding: 0;
    margin: 15px 24px 15px 24px;
  }
  .word ul{
    width: 20%;
    float: left;
  }
  .word li{
    font-size: 12px;
  }
  .box1{
    height: 10px;
    background-color: rgb(240,240,240);
  }
  .box2{
    height: 45px;
  }
  .shoplist {
    margin-top: 25px;
  }
  .shoplist p{
    font-size: 18px;
    margin-bottom: 30px;
  }
  .list{
    margin: 0 25px 0 25px;
    font-size: 16px;
  }
  .list ul{
    float: left;
    width: 50%;
  }
</style>
