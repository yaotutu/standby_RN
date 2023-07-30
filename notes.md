# RN笔记

## 自定义字体
* 在根目录添加配置文件 react-native.congfig.js
```javascript
module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ['./assets/fonts/'],
}
```
* assets为存放静态资源的路径，类似于前端项目的assets 
* 在项目路径运行命令，将资源link到项目中   
* "npx react-native-asset" 
* assets文件夹中的就被link到了项目中，直接设置即可，无需导入.(适用于0.6x以后)
* eg:
    * fontFamily: "xxx"


