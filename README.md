# vue3-practice

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 技术栈

* 代码规范：EditorConfig + Prettier + ESlint

## 添加的依赖

### less

安装命令

```shell
yarn add less less-loader -D
```

### element-plus

## 代码规范

### editorconfig

不同的编辑ide会读取.editorconfig里面的的配置，按照配置里面的规则去调整ide的配置，从而保证同一个项目在不用ide上面文件格式的统一。

> 官网：[https://editorconfig.org/](https://editorconfig.org/)

在项目的根目录层级添加.editorconfig文件

```
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

> VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code 

### Prettier

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

官网：[https://prettier.io/](https://prettier.io/)

配置：[https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)

在项目根目录添加.prettierrc文件，该文件支持JOSN和YAML语法

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": false
}
```

当使用右键格式化代码的时候就会读取配置里面的规则进行格式化了

> VS Code 需要安装 Prettier - Code formatter

### ESlint

ESLint 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。

1、安装ESLint

推荐本地安装，安装在项目中

```shell
yarn add eslint -D
```

2、初始化eslint，为了生成配置文件和下载相关依赖

```shell
npx eslint --init
```

执行这个命令，跟着提示选择合适自己项目的配置的就可以了，最后选择安装依赖，如果安装依赖报错的话，就看报错信息手动安装依赖

然后在根目录生成.eslintrc.js文件

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
};
```

3、配置VS Code

> VSCode 需要下载插件 ESLint

置编辑器保存文件时自动执行 eslint --fix 命令进行代码风格修复，在settings.json 设置文件中，增加以下代码：

```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```

4、解决和prettier产生的冲突

因为prettier和eslint对格式规范都有涉及到，所以不可避免会有冲突，所以当有冲突的时候，应该是由eslint给出报错信息好一点

* eslint: 主要管代码质量问题
* prettier: 主要管代码风格问题（不会影响代码的运行）

* eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。

* eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

安装

```shell
yarn add eslint-plugin-prettier eslint-config-prettier -D
```

修改eslint配置文件的部分内容

```js
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```

