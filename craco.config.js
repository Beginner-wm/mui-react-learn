const path = require('path')
//识别'@'路径  https://juejin.cn/post/7032992615985315871
module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@pages': path.join(__dirname, './src/pages'),
      // '@pages': path.join(__dirname, 'src/pages'),
    }
  }
}