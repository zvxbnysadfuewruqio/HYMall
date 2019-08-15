const mutations = {
  addCounter(state, info){
    info.count++
  },
  addToCart(state, info) {
      state.cartList.push(info)
  }
}

export default mutations

