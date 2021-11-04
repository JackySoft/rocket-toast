/**
 * @desc a toast plugin for mobile
 */
import Vue from "vue";
import ToastComponent from "./toast.vue";
import LoadingComponent from "./loading.vue";

function loading(options) {
  const LoadingConstructor = Vue.extend(LoadingComponent);

  let instance = new LoadingConstructor({
    el: document.createElement("div"),
  });
  console.log(instance, options);
  document.body.appendChild(instance.$el);
  if (options) {
    console.log(options);
  }
  return {
    showLoading(text = "加载中...") {
      instance.show = true;
      instance.text = text;
    },
    hideLoading() {
      instance.show = false;
    },
  };
}

// 服务函数
function showToast(message, options) {
  var opt = {
    defaultType: "center",
    duration: "3000",
  };
  for (var property in options) {
    opt[property] = options[property];
  }
  let callback = "";

  const ToastController = Vue.extend(ToastComponent);

  var instance = new ToastController().$mount(document.createElement("div"));
  instance.message = message;
  instance.visible = true;
  document.body.appendChild(instance.$el);
  setTimeout(function() {
    instance.visible = false;
    setTimeout(() => {
      document.body.removeChild(instance.$el);
      callback && callback();
    }, 500);
  }, opt.duration);
}
export default {
  install(Vue) {
    Vue.prototype.$toast = { showToast};
    Vue.prototype.$loading = { ...loading() };
  },
  showToast,
  ...loading()
};
