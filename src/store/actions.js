const actions = {
  addCart(context, info) {
    return new Promise((resolve,reject)=>{
      // 1.查看是否添加过
      const oldInfo = context.state.cartList.find(item => item.iid === info.iid)

      // 2.+1或者新添加
      if (oldInfo) {
        // oldInfo.count += 1
        context.commit('addCounter',oldInfo)
        resolve("当前的商品数量+1")
      } else {
        // info.count = 1
        // info.checked = true
        // context.cartList.push(info)
        info.count=1
        context.commit('addToCart',info)
        resolve("当前的商品加入购物车成功")
      }

    })
  }
}

export default actions

