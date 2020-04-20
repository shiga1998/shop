<template>
  <div class="choose" v-show="choosestatus">
    <div class="exit" @click="exit">x</div>
    <img :src="src">
    <span>价格：{{chooseprice}}</span>
    <div class="shoplist" v-for="list in this.$store.state.newShopList" :key="list.id">
      <el-radio-group v-model="chooseid">
        <el-radio-button :label="list.id">{{list.name}}</el-radio-button>
      </el-radio-group>
    </div>
    选中id：{{chooseid}}
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {
      choosestatus: true,
      chooseid: [],
      src: '',
      chooseprice: ''
    }
  },
  created () {
    this.$store.dispatch('mock')
    this.$store.dispatch('list')
  },
  methods: {
    exit () {
      this.choosestatus = false
      this.$emit('childByClick', this.choosestatus)
    }
  }
}
</script>

<style scoped>
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
