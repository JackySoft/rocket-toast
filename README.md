## rocket-toast
一款基于移动端的Toast和Loading插件

## Install

```
yarn add rocket-toast -S

# or 

npm i rocket-toast -S
```

## WeChat
> 可通过微信群解决大家遇到的问题，并共同推进rocket-render快速迭代。

<img alt="Join Discusion Group" src="https://jackysoft.github.io/rocket-render/wechat.jpg" width="300">

## Usage

1. main.js中全局安装插件
```
import Vue from 'vue'
import RocketToast from 'rocket-toast'
import 'rocket-toast/lib/rocket-toast.css'

Vue.use(RocketToast)
```

2. 页面使用组件
```html
<template>
    <div class="block">
      <button class="btn" @click="showToast()">显示Toast</button>
      <button class="btn" style="width:200px" @click="showToast(5000)">显示Toast,5秒后关闭</button>
      <button class="btn" @click="showLoading">显示Loading</button>
      <button class="btn" @click="hideLoading">关闭Loading</button>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    showToast(time=3000){
        this.$toast.showToast('恭喜你，本条消息为toast',{duration:time});
    },
    showLoading(){
      this.$loading.showLoading();
    },
    hideLoading(){
      this.$loading.hideLoading();
    }
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html {
  font-size: calc(100vw / 7.5);
}
.block{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 1rem;
  .btn{
    display: inline-block;
    width: 100px;
    z-index: 9000;
  }
}
</style>
```
