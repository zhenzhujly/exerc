// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//import的原理就是require();
import App from './App'
import router from './router'//vue 中原生的页面跳转 ：window.loaction.href=index.html
import axiosInstance from 'https'// ./指当前的同级的，一般不写，../指上一级；

Vue.config.productionTip = false//来关闭生产模式下给出的提示
//axios 必须要修改原型链 也就是vue实例下的prototype的修改
Vue.prototype.$https=axiosInstance;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axiosInstance,
  template: '<App/>',
  components: { App }
  //{components：{ App },  axiosInstance}或则render: h => h(App),//es6的写法 公司一般用这种方法
})