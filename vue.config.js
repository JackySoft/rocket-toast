module.exports = {
  productionSourceMap: true,
  lintOnSave: true,
  // 开发运行相关配置
  devServer: {
    open: false, // 自动打开浏览器
    port: 3000, // 端口
    // 浏览器 overlay（刷新） 同时显示eslint的警告和错误
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
