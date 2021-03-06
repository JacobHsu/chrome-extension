# chrome-extension

## Good

### 開發人員工具

[Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc) 讓瀏覽 github 代碼變得像本地編輯器一樣輕鬆  
[Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=zh-TW)  Identify web technologies  
[掘金](https://chrome.google.com/webstore/detail/掘金/lecdifefmmfjnjjinhaennhdlmcaeeeb?hl=zh-CN)

### 實用工具

[Imageye - Image downloader](https://chrome.google.com/webstore/detail/imageye-image-downloader/agionbommeaifngbhincahgmoflcikhm)  
[捕捉網頁截圖 - FireShot](https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=zh-TW)  

## dev

[Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
The completed extension can be downloaded [here](https://developer.chrome.com/extensions/examples/tutorials/get_started_complete.zip)


[Chrome Extension 開發與實作](https://ithelp.ithome.com.tw/users/20079450/ironman/1149) 系列
[快速打造一個chrome extension](https://ithelp.ithome.com.tw/articles/10186039)  

[iconfinder](https://www.iconfinder.com)  

GoogleChrome/[chrome-app-samples](https://github.com/GoogleChrome/chrome-app-samples)  
[hello-world-sync](https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/hello-world-sync)  

## vue-cli-plugin-chrome-ext

`vue.config.js` 變更了原始專案的執行位置  

[vue-cli-plugin-chrome-ext](https://github.com/superoo7/vue-cli-plugin-chrome-ext)  
vue-cli [插件](https://cli.vuejs.org/zh/guide/plugins-and-presets.html#插件)  

$ vue create vue-ext  
$ cd vue-ext  
$ vue add chrome-ext
$ yarn serve  
$ npm run build-watch `dist`  

`chrome://extensions/` 載入未封裝的項目  \vue-ext>`dist`

[vue-cli3开发Chrome插件实践](https://juejin.im/post/5ceca3d96fb9a07eea3252f9)  

创建一个vue-cli3项目： `vue create {vue-extension}`，对话流程选择默认就行。
进入项目`cd {vue-extension}`
安装`vue-cli-plugin-chrome-ext`插件：`vue add chrome-ext`,根据安装对话选项设置好。
删除vue-cli3无用文件跟文件夹：`src/main.js`、`src/components`
`npm run build-watch` 运行开发环境，对修改文件进行实时编译并自动在根目录下生成`dist`文件夹，然后在浏览器上加载dist文件夹完成插件安装。

> URIError: Failed to decode param '/%3C%=%20BASE_URL%20%%3Efavicon.ico'  
public index.html  `<link rel="icon" href="<%= BASE_URL %>favicon.ico">`  

Chrome插件的API 
[chrome.extension](https://developer.chrome.com/extensions/extension) [getURL](https://developer.chrome.com/extensions/extension#method-getURL)  
[Chrome Extension Hot Reloader](https://github.com/xpl/crx-hotreload)  

### debug

[core-js module error](https://github.com/vuejs/vue-cli/issues/3678)  

# docs

[Declare Permissions](https://developer.chrome.com/extensions/declare_permissions)  

# mainfest.json 
browser_action 瀏覽器按鈕 在瀏覽器開敵時便是啟用狀態  
page_action 頁面按鈕  必需在指定的條件符合的狀況才會啟用  

# ESLint

error: Parsing error: Unexpected token < at src\popup\App\App.vue:1:1:

```js
parserOptions: {
    parser: 'babel-eslint'
},
```
# npm

[![NPM](https://nodei.co/npm/webpack-bundle-analyzer.png?downloads=true&stars=true)](https://nodei.co/npm/webpack-bundle-analyzer/)  

`npm run build --report`  

[![NPM](https://nodei.co/npm/zip-webpack-plugin.png?downloads=true&stars=true)](https://nodei.co/npm/zip-webpack-plugin/)  
Chrome插件，提交到谷歌插件市場的話需要打包為zip文件才行。重複流程當然是交給程序。

# React 

[Create React App](https://zh-hant.reactjs.org/docs/create-a-new-react-app.html)
`npx create-react-app react-ext`  
[Building a Chrome Extension Using React](https://medium.com/@gilfink/building-a-chrome-extension-using-react-c5bfe45aaf36)  

[使用React快速开发Chrome扩展程序](https://segmentfault.com/a/1190000014662427)  

## References

[Vue - 打造 Chrome Extension](https://dotblogs.com.tw/brian90191/2019/06/20/154311)
[Building a Chrome Extension Using React](https://medium.com/@gilfink/building-a-chrome-extension-using-react-c5bfe45aaf36)  
[前端效能提升之不可忽略的 Chrome 插件](https://juejin.im/post/5ddca3cbe51d4523601740ae?utm_source=gold_browser_extension)
[Chrome Extension 開發與實作 系列](https://ithelp.ithome.com.tw/users/20079450/ironman/1149)

## notes

你的按鈕如果不是在任何頁面都有作用，請使用`頁面按鈕`，否則請使用`瀏覽器按鈕`。
