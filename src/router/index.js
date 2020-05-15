import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routers'

Vue.use(VueRouter)




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(({ meta, path, query }, from, next) => {

  const data = Boolean(localStorage.getItem('userInfo'))||''

  const remember = localStorage.getItem('remember')&&JSON.parse(localStorage.getItem('remember'))||""

  if(path=="/login"&&!remember){
     localStorage.removeItem('userInfo');
  }
    if (data) {
        next()
    }else {
       if(path=="/login"){
         localStorage.clear();
         next()
       }else{
        localStorage.clear();
         next('/login')
       }
    
    }


})

router.afterEach(route => {
 
})





export default router
