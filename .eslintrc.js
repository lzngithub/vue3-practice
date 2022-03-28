module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:import/recommended', // ***1.解决引入问题
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      webpack: {
        // 此处config对应webpack.config.js的路径，我这个路径是vue-cli3默认的路径
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  },
  rules: {
    'no-console': 'off'
    // 'import/no-unresolved': 'off'
  }
}
