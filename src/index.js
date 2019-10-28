import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Test from './test/test.vue'
Vue.use(ElementUI)

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  render: h => h(Test)
}).$mount('#app')
