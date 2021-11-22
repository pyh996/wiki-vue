module.exports = {

  lintOnSave:false,
  devServer: {
    port: 8888,
    // open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: { //配置多个代理
      "/yahui": {
        target: 'http://127.0.0.1:8888/',
        changeOrigin: true,
        ws: false, //值为false防止控制台报错★★★★★★★★
        pathRewrite: {
          '/yahui': ''
        }
      },
    },
  },
};
