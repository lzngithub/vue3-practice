# vue3-practice

这是一个集合代码规范，提交规范的的一个vue3的项目，主要用来学习vue3和项目代码规范的一个例子，后面后慢慢往里面加TypeScript和一个项目基本需要使用的功能，包括router，vuex，vite个性化定制，axios等功能

## 技术栈

* 包管理器: yarn
* css预编译工具：less
* UI组件库：element-plus
* 代码规范：EditorConfig + Prettier + ESlint + Airbnb JavaScript Style Guide
* Git hook工具：husky + lint-staged
* 提交规范：commitlint


## less

css预处理工具  
官网：[https://less.bootcss.com/](https://less.bootcss.com/)

1. 安装 less


```shell
yarn add less less-loader -D
```

2. 使用例子（vue3）

```less
<style lang="less" scoped>
.content {
  color: #409eff;
}
.search {
  width: 200px;
}
</style>
```

## element-plus

官网：[https://element-plus.gitee.io/zh-CN/](https://element-plus.gitee.io/zh-CN/)

1. 安装 element-plus

```shell
yarn add element-plus
```
2. 在项目中引入（vue3）

在main.js文件中加入以下内容

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
```



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

安装

```shell
yarn add prettier -D
```

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

## Git Hook

### husky

git commit的时候会对你可以运行eslint --fix对代码进行检查，如果检查通过，则能正常提交，如果不通过，则报错

官网配置：[https://typicode.github.io/husky/#/?id=usage](https://typicode.github.io/husky/#/?id=usage)

安装配置（版本6及以上）

1、自动配置（官网推荐）

```shell
npx husky-init && yarn
```

该命令做了四件事(不分先后顺序)

1. 安装husky到开发依赖
2. 在项目的根目录下创建.husky文件夹
3. 在 .husky 目录创建 pre-commit hook，并初始化 pre-commit 命令为 npm test
4.  修改 package.json 的 scripts，增加 "prepare": "husky install"

npx husky-init 做了第2、3、4点，yarn 做了第一点的内容

所以可以根据这个命令做的这四件事，手动进行配置

2、手动配置

* 安装husky

```shell
yarn add husky -D
```

* 创建Git Hook

```shell
npx husky install
```

这个命令对应上面第二第三点

* 手动修改 package.json 的 scripts，增加 "prepare": "husky install"

上面两种方法已经把husky集成到项目中，然后修改Git Hook 中触发的命令，就是修改.husky/pre-commit文件中的npm test为下面内容

```shell
eslint --fix ./src --ext .vue,.js,.ts
```

上面命令的意思是对所有的的vue、js、ts文件执行 eslint --fix 命令

所以现在解释commit代码时的整个流程，当git commit 的时候，会触发pre-commit脚本执行，脚本执行会对所有的的vue、js、ts文件执行 eslint --fix 命令。

### lint-staged

我们commit的时候，其实不需要对所有的文件都进行检查和修复，只需要对修改的文件进行就可以了，所以这个时候我需要集成lint-staged

1. 安装

```shell
yarn add lint-staged -D
```
2. 在 package.json里增加 lint-staged 配置项

```json
"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
},
```

3. 修改 .husky/pre-commit hook 的触发命令为：npx lint-staged

## commit message 校验

### commitlint

只让符合 Angular 规范的 commit message 通过

1. 安装 commitlint

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2. 配置 commitlint

执行以下命令

```shell
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

3. 增加Git Hook钩子

使用 husky 的 commit-msg hook 触发验证提交信息的命令
我们使用 husky 命令在 .husky 目录下创建 commit-msg 文件，并在此执行 commit message 的验证命令。

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
