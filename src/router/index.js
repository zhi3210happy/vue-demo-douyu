import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const Home = resolve => require(['@/Home'], resolve)
const CategoryList = resolve => require(['@/CategoryList'], resolve)
const RoomList = resolve => require(['@/RoomList'], resolve)
const Recommand = resolve => require(['@/Recommand'], resolve)
const User = resolve => require(['@/User'], resolve)

Vue.use(Router)

export default new Router({
  linkActiveClass: "is-active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/category',
      name: 'CategoryList',
      component: CategoryList

    },
    {
      path: '/roomList/:gameId/:gameName',
      name: 'RoomList',
      component: RoomList
    },
    {
      path: '/recommand',
      name: 'Recommand',
      component: Recommand
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})
