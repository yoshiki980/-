import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/teacher/home.vue'
import Users from '../components/menu/users.vue'
import Activities from '../components/menu/activities.vue'
import Courses from '../components/menu/courses.vue'
import DetailActivities from '../components/menu/detailActivities.vue'
import CourseCardManage from '../components/menu/courseCardManage.vue'
import CourseCardStatistics from '../components/menu/courseCardStatistics.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/users',
    component: Home,
    children: [
      {path: 'users',component: Users},
      {path: 'activities',component: Activities},
      {path: 'courses',component: Courses},
      //考勤详情路由规则
      {path: 'detailactivities/:id',component: DetailActivities,props: true},
      //课程考勤管理
      {path: 'coursecardmanage/:courseName',component: CourseCardManage,props: true},
      //课程考勤统计
      {path: 'coursecardstatistics/:courseName',component: CourseCardStatistics,props: true},
      
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局路由导航守卫
router.beforeEach((to,from,next) =>{
  // 如果用户访问的是登陆页面，直接放行
  if(to.path === '/login') return next()
  // 获取token值
  const tk = localStorage.getItem('token')
  if(!tk) {
    //token值不存在，强制跳转登陆页面
    return('/login')
  }
  // 存在token值，直接放行
  next()
})
export default router
