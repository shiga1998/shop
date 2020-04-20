<template>
  <div class="details">
    <el-container>
      <el-row style="height: 375px">
        <el-carousel height="375px" indicator-position="none">
          <el-carousel-item v-for="item in newDetailsBanner" :key="item.id">
            <img :src="item.src">
          </el-carousel-item>
        </el-carousel>
        <div class="share">
          <el-button round type="info" style="float: right" @click="share">分享</el-button>
        </div>
      </el-row>
      <share @sendByVal="sendByVal" v-show="sendVal"></share>
      <el-row style="height: 150px; margin-top: 40px; border-bottom: 1px solid rgb(241,241,241)">
        <span style="line-height: 150px; margin-left: 15px">现价：￥</span>
      </el-row>
      <!--choose-->
      <el-row>
        <div style="height: 55px; line-height: 55px" @click="clickchoose">
        <span style="float: left; margin-left: 15px">规格数量选择</span>
        <span style="float: right; margin-right: 15px">></span>
        </div>
          <div class="choose" v-show="choose">
            <div class="exit" @click="exit">x</div>
            <img :src="src">
            <span>价格：{{chooseprice}}</span>
            <div class="shoplist" v-for="list in this.$store.state.newShopList" :key="list.id">
              <el-radio-group v-model="chooseid" @change="addCart">
                <el-radio-button :label="list">
                  <p>{{list.name}}</p>
                </el-radio-button>
              </el-radio-group>
            </div>
<!--            选中id：{{chooseid}}-->
            <el-input-number v-model="num" :min="1" :max="99" label="描述文字"></el-input-number>
          </div>
      </el-row>
        <div style="height: 10px; width: 100%; background-color: rgb(241,241,241)"></div>
      <el-row>
        <div style="height: 50px; width: 100%">
          <span style="line-height: 50px; font-size: 16px; margin-left: 15px">商品参数</span>
        </div>
      </el-row>
      <el-row>
        <div class="main" v-for="image in newDetailsImage" :key="image.id">
          <img :src="image.src">
        </div>
      </el-row>
      <el-footer class="footer" height="50px">
        <router-link to="/">
          <div class="attention">
            <i class="el-icon-star-off" style="color: orange"></i>
          </div>
        </router-link>
        <router-link to="/shopcart">
          <div class="shopcart">
            <el-badge v-model="cartnum" :max="99">
            <i class="el-icon-shopping-cart-2" style="color: rgb(103,103,103)"></i>
            </el-badge>
          </div>
        </router-link>
          <div class="add" @click="addToCart">
            <span>加入购物车</span>
          </div>
        <div class="buy">
          <span>立即购买</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Share from './share'
import Choose from './Choose'
import {mapState} from 'vuex'
export default {
  name: 'Details',
  components: {Choose, Share},
  data () {
    return {
      sendVal: false,
      choose: false,
      choosestatus: false,
      chooseid: '',
      src: '',
      chooseprice: '',
      num: 0,
      cartnum: 0,
      newDetailsBanner: [
        {src: require('../../assets/8.png')},
        {src: require('../../assets/9.png')}
      ],
      newDetailsImage: [
        {src: require('../../assets/10.jpg')},
        {src: require('../../assets/11.jpg')},
        {src: require('../../assets/12.jpg')},
        {src: require('../../assets/13.jpg')}
      ]
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('ChooseID', {aaa: this.chooseid})
    },
    addToCart () {
      if (!this.$store.state.chooseid) {
        console.log('请选择商品')
      }
      this.$store.dispatch('GetList', {bbb: this.chooseid.name})
      this.$store.dispatch('GetList', {bbb: this.chooseid.price})
      this.cartnum += this.num
      this.$store.dispatch('getshopnum', {ddd: this.num})
    },
    share () {
      this.sendVal = !this.sendVal
    },
    sendByVal: function (sendVal) {
      this.sendVal = sendVal
    },
    clickchoose () {
      this.choose = !this.choose
    },
    exit () {
      this.choose = false
    }
  },
  created () {
    this.$store.dispatch('mock')
    this.$store.dispatch('list')
  },
  computed: {
    ...mapState([''])
  }
}
</script>

<style scoped>
  .el-footer {
    margin: 0;
    padding: 0;
  }
  .footer {
    z-index: 10;
    width: 100%;
    background-color: rgb(248,248,248);
    text-align: center;
    line-height: 60px;
    color: white;
    /*底部固定*/
    position: fixed;
    bottom: 0
  }
  a {
    text-decoration: none;
    color: black;
  }
  .router-link-active {
    text-decoration: none;
  }
  .attention {
    float: left;
    width: 10%;
    height: 60px;
  }
  .shopcart {
    float: left;
    width: 20%;
    height: 60px;
  }
  .add {
    float: left;
    width: 35%;
    height: 60px;
    background: rgb(238,123,22);
  }
  .buy {
    float: left;
    width: 35%;
    height: 60px;
    background: rgb(162,22,34);
  }
  .share {
    height: 40px;
    width: 100%;
    background-color: rgb(241,241,241);
  }
  .main {
    height: 446px;
  }
  .choose{
    z-index: 2;
    width: 100%;
    height: 60%;
    background-color: white;
    position: fixed;
    bottom:0px;
  }
  .exit{
    width: 20px;
    height: 20px;
    float: right;
  }
  .share ul {
    width: 40%;
    float: left;
    margin: 10px;
  }
</style>
