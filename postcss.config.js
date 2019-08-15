module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗的宽度 对应的是我们设计稿的宽度
      viewportHeight:667,//视窗的高度 对应的是我们设计稿的高度
      unitPrecision:5,//指定需要转换为视窗单位值的小数位数
      viewportUnit:"vw",//指定需要转换的视窗单位
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
      minPixeValue:1,//小于‘1px’不转换
      mediaQuery:false,//允许在媒体查询中转换'px'
      exclude:[/TabBar/],//不需要转换的文件
    }
  }
}
