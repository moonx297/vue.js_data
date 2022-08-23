import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [ 
  //  router-link to='와 index.js의 path 가 일치해야 한다. 
  {
    path: '/',  // path 가 / 이면 컴포넌트는 HomeView 이다.
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',    //App.vue의 /about과 값이 같은 것을 찾음. 그리고 그 때 component에 들어있는
                      // 확장자가 .vue인 애를 찾는다. 여기서는 /AboutView.vue. -> /views/AboutView.vue를 찾아 들어간다.
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about'*/ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',  //파일 이름과 통일
    component: () => import(/* webpackChunkName: 'databinding' , webpackPrefetch:true*/ '../views/1_databinding/DataBindingStringView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
