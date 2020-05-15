import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '@/assets/css/base.css';
import '@/assets/css/iconfont.css';

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}


Vue.use(ViewUI);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // 登录后获取资料
    console.log(Boolean(localStorage.getItem('userInfo')))
    if (Boolean(localStorage.getItem('userInfo'))) {
      this.$store.commit('SET_USER_INFO', JSON.parse(localStorage.getItem('userInfo')))
    }
  }
}).$mount('#app')
