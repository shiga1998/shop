<template>
  <div class="share" v-show="sendVal">
    <div class="exit" @click="exit">x</div>
    <ul>
      <li>分享给好友</li>
    </ul>
    <ul>
      <li>生成海报</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {
      sendVal: true
    }
  },
  methods: {
    exit () {
      this.sendVal = false
      this.$emit('sendByVal', this.sendVal)
    }
  }
}
</script>

<style scoped>
  .share{
    width: 100%;
    height:165px;
    background-color: whitesmoke;
    position: fixed;
    bottom:0px;
    z-index: 3;
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
