# whscmfront

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 项目结构
--api   服务器接口
--assets 样式和图片资源
--components 全站公用组件
--i18n  语言包
--pages 多页面模块
--utils 通用函数


## 新增模块
--新增的模块需要在 vue.config.js 内配置 pages 选项(目前已经通过读取 pages 文件夹自动完成配置)

## pages 内模块文件目录及命名规范
--每个模块在 pages 内新建一个文件夹
--vue 文件首字母大写, js 文件首字母小写
--store 使用strict module 模式

## Vue 从 utils/enhanceVue 内导出,不要直接使用框架提供的 Vue
## VueRouter 从 utils/enhanceRouter 内导出,不要直接使用框架提供的 VueRouter



## 未解決問題
-- build 之後 css 背景圖片問題： css/pages/ 下的css 背景图 相对路劲错误，css 下的正确，似乎build打包无法设置背景图的结对路劲，导致差了一级，暂时解决办法是吧 img 拷贝一份到 css 文件夹下
-- seo 问题： 在 seo 分之未完成 vue 的 ssr 打包
  
