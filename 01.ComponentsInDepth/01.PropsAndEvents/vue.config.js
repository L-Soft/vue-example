const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/abstracts/abstracts.scss";`
      }
    }
  },
  devServer: {
    proxy: 'http://openapi.animal.go.kr'
  }
}
