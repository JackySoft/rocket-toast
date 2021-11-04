<template>
  <div id="app">
    <div class="block">
      <button class="btn" @click="showToast()">显示Toast</button>
      <button class="btn" style="width:200px" @click="showToast(5000)">显示Toast,5秒后关闭</button>
      <button class="btn" @click="showLoading">显示Loading</button>
      <button class="btn" @click="hideLoading">关闭Loading</button>
    </div>
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
