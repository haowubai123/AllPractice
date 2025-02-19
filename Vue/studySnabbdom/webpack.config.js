// 从webpack官网照着配置
const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成，http://localhost:8080/xuni/bundle.js
    publicPath:'xuni',
    // 打包出来的文件名，不会真正的物理生成
    filename: 'bundle.js',
  },
  devServer: {
    // 端口号
    port: 8080,
    // 静态资源文件夹
    contentBase: 'www'
  }
};