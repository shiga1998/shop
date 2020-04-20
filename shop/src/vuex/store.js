import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  newImg: null,
  newText: null,
  newList: null,
  newMenu: null,
  newClassificationBanner: null,
  newClassificationList: null,
  LoginUser: null,
  newDetailsBanner: null,
  newDetailsImage: null,
  newShopList: null,
  chooseid: null,
  shoplistID: null,
  added: [],
  shopid: null,
  shopprice: null,
  shopname: null,
  shopnum: null
}

const mutations = {
  // add (state, {shoplistID}) {
  //   let record = state.added.find(n => n.id === this.state.chooseid)
  //   if (!record) {
  //     state.added.push({
  // id
  // })
  // console.log(id)
  // }
  // let record = state.added.find(n => n.id === id)
  // if (!record) {
  //   state.added.push({
  //     id,
  //     num: 1
  //   })
  // } else {
  //   console.info(record, state.added)
  // }
  // },
  // setCheckoutStatus (state, status) {
  //   state.checkedItems = status
  // },
  // 获取actions里changeImg，把state里的newImg的图片换成res.data.images
  changeImg (state, res) {
    state.newImg = res.img
  },
  changeText (state, res) {
    state.newText = res.text
  },
  changeList (state, res) {
    state.newList = res.list
  },
  changeMenu (state, res) {
    state.newMenu = res.menu
  },
  changeClassificationBanner (state, res) {
    state.newClassificationBanner = res.banner
  },
  changeClassificationList (state, res) {
    state.newClassificationList = res.fication
  },
  changeDetailsBanner (state, res) {
    state.newDetailsBanner = res.details
  },
  changeDetailsImage (state, res) {
    state.newDetailsImage = res.image
  },
  changeShopList (state, res) {
    state.newShopList = res.shoplist
  },
  getID (state, {aaa}) {
    state.chooseid = aaa
  },
  getShopListID (state, res) {
    state.shoplistID = res.shoplistID
  },
  changedata (state, res) {
    state.added = res.list
  },
  getShopID (state, {aaa}) {
    state.shopid = aaa
  },
  getShopPrice (state, {bbb}) {
    state.shopprice = bbb
  },
  getShopName (state, {ccc}) {
    state.shopname = ccc
  },
  getShopNum (state, {ddd}) {
    state.shopnum = ddd
  },
  Login (state, user) {
    if (user) {
      state.LoginUser = user
    }
  }
}

const actions = {
  // addToCart ({commit}, product) {
  //   commit('add', {
  //     id: product.id
  //   })
  // },
  addToCart () {
    // commit('setCheckoutStatus', null)
    // if (product.inventory > 0) {
    //   const cartItem = state.items.find(item => item.id === state.chooseid)
    //   if (!cartItem) {
    //     commit('pushProductToCart', {id: state.chooseid})
    //   } else {
    //     commit('incrementItemQuantity', cartItem)
    //   }
    //   commit('products/decrementProductInventory', { id: state.chooseid }, { root: true })
    // }
    // console.log()
  },
  // get
  mock (context) {
    axios.get('/mock').then(res => {
      context.commit('changeImg', {img: res.data.images})
      context.commit('changeText', {text: res.data.word})
      context.commit('changeList', {list: res.data.list})
      context.commit('changeMenu', {menu: res.data.menu})
      context.commit('changeClassificationBanner', {banner: res.data.classificationBanner})
      context.commit('changeClassificationList', {fication: res.data.classificationList})
      context.commit('changeDetailsBanner', {details: res.data.detailsBanner})
      context.commit('changeDetailsImage', {image: res.data.detailsImage})
    })
  },
  list (context) {
    axios.get('/list').then(res => {
      context.commit('changeShopList', {shoplist: res.data.shoplist})
      context.commit('getShopListID', {shoplistID: res.data.shoplist.id})
      context.commit('changedata', {list: res.data.shoplist})
    })
  },
  ChooseID (context, {aaa}) {
    context.commit('getID', {aaa})
  },
  GetList (context, {bbb}) {
    context.commit('changedata', {bbb})
  },
  getshopid (context, {aaa}) {
    context.commit('getShopID', {aaa})
  },
  getshopprice (context, {bbb}) {
    context.commit('getShopPrice', {bbb})
  },
  getshopname (context, {ccc}) {
    context.commit('getShopName', {ccc})
  },
  getshopnum (context, {ddd}) {
    context.commit('getShopNum', {ddd})
  }
}

const getters = {
  getLoginUserName (state) {
    return state.LoginUser ? state.LoginUser.Username : '点击登录'
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
