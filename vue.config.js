module.exports = {
  // publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
// const path = require('path')
// const webpack = require('webpack')
// module.exports = {
//   // 修改output.path
//   outputDir: 'dist',
//   // 修改output.publishPath
//   publicPath: './',
//   chainWebpack: config => {
//     // 添加全局scss文件
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//     types.forEach(type => {
//       config.module.rule('scss').oneOf(type).use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//           patterns: [
//             path.resolve(__dirname, 'src/css/base.scss')
//           ]
//         })
//     })
//     // 移除 prefetch 插件 //预加载
//     config.plugins.delete('prefetch')
//     // 引入
//     const chunkFolder = process.env.NODE_ENV !== 'production' ? 'debug' : 'dist'
//     config.plugin('dll-reference-plugin')
//       .use(webpack.DllReferencePlugin)
//       .tap(options => {
//         options[0] = {
//           context: __dirname,
//           manifest: require(path.join(__dirname, `./src/common_chunk/${chunkFolder}/manifest.json`))
//         }
//         return options
//       })
//     config.plugin('add-asset-html-webpack-plugin')
//       .use('add-asset-html-webpack-plugin')
//       .tap(options => {
//         options[0] = {
//           filepath: path.resolve(__dirname, `./src/common_chunk/${chunkFolder}/lib_*.js`)
//         }
//         return options
//       })
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'components': '@/components',
//         'content': 'components/content',
//         'common': 'components/common',
//         'assets': '@/assets',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// }
