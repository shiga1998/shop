<template>
  <div class="classification">
    <el-container>
      <el-header height="52px">
        <el-input size="small" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input"></el-input>
      </el-header>
    </el-container>
    <el-container>
      <el-aside width="80px">
        <div class="menu" v-for="menuname in this.$store.state.newMenu" :key="menuname.index">
          <el-menu class="focus">
            <el-menu-item index="1" style="margin: 0; padding: 0">
              <span @click="clicknum(menuname.id)">{{menuname.name}}</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div class="banner" v-for="banner in this.$store.state.newClassificationBanner" :key="banner.id">
          <el-image :src="banner.image"></el-image>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <el-divider style="font-size: 10px">配件耗材分类</el-divider>
        <div style="height: 30px; width: 100%"></div>
        <div class="list" v-for="list in this.$store.state.newClassificationList" :key="list.id">
          <ul>
            <li><img :src="list.image"></li>
            <li>{{list.name}}</li>
          </ul>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ClassIfication',
  data () {
    return {
      input: '',
      activeIndex: '1'
    }
  },
  created () {
    this.$store.dispatch('mock')
  },
  methods: {
    clicknum (id) {}
  }
}
</script>

<style scoped>
  html,body,div,ul,li,a,p,span{
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .el-header{
    margin: 10px 15px 0 15px;
    padding: 0;
  }
  .focus :focus{
    color: rgb(22,23,142);
    background-color: rgb(245,245,245);
    font-weight: bold;
    border-left: 5px solid rgb(22,23,142);
  }
  .list ul {
    float: left;
    width: 33%;
  }
  .el-menu-item.is-active {
    color: rgb(109,109,109);
  }
</style>
