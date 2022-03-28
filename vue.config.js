const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
  }
})
