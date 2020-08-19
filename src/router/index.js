import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/shilitupu',
    children: [
      {
        path: 'shilitupu',
        component: () => import('@/views/dashboard/index'),
        name: 'shilitupu',
        meta: { title: '事例图谱', icon: 'tree', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/zhinengwenda',
    alwaysShow: true,
    meta: {
      title: '智能问答',
      icon: 'message'
    },
    children: [
      {
        path: 'zhinengwenda',
        component: () => import('@/views/dashboard/index'),
        name: 'zhinengwenda',
        meta: { title: '智能问答1', icon: 'message', affix: true }
      },
      {
        path: 'zhinengwenda',
        component: () => import('@/views/dashboard/index'),
        name: 'zhinengwenda',
        meta: { title: '智能问答2', icon: 'message', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/yuqingfenxi',
    alwaysShow: true,
    meta: {
      title: '舆情分析',
      icon: 'chart'
    },
    children: [
      {
        path: 'yuqingxinxichuli',
        component: () => import('@/views/dashboard/index'),
        name: 'yuqingfenxi',
        meta: { title: '舆情信息处理', icon: 'chart', affix: true },
        alwaysShow: true,
        children: [
          {
            path: 'huagongshigufenlei',
            component: () => import('@/views/yuqingfenxi/index'),
            name: 'yuqingfenxi',
            meta: { title: '化工事故分类', icon: 'chart', affix: true }
          },
          {
            path: 'wenzhangxiangsidupipei',
            component: () => import('@/views/dashboard/index'),
            name: 'yuqingfenxi',
            meta: { title: '文章相似度匹配', icon: 'chart', affix: true }
          },
          {
            path: 'qingganfenxi',
            component: () => import('@/views/dashboard/index'),
            name: 'yuqingfenxi',
            meta: { title: '情感分析', icon: 'chart', affix: true }
          },
          {
            path: 'zidongzhaiyao',
            component: () => import('@/views/dashboard/index'),
            name: 'yuqingfenxi',
            meta: { title: '自动摘要', icon: 'chart', affix: true }
          }
        ]
      },
      {
        path: 'yuqingxinxizhanshi',
        component: () => import('@/views/dashboard/index'),
        name: 'yuqingfenxi',
        meta: { title: '舆情信息展示', icon: 'chart', affix: true },
        alwaysShow: true,
        children: [
          {
            path: 'yuqingredupaihangbang',
            component: () => import('@/views/dashboard/index'),
            name: 'yuqingfenxi',
            meta: { title: '舆情热度排行榜', icon: 'chart', affix: true }
          },
          {
            path: 'hongguanshujutongjizhanshi',
            component: () => import('@/views/dashboard/index'),
            name: 'yuqingfenxi',
            meta: { title: '宏观数据统计展示', icon: 'chart', affix: true }
          },
          {
            path: 'weiguanshujutongjizhanshi',
            component: () => import('@/views/dashboard/index'),
            name: 'yuqingfenxi',
            meta: { title: '微观数据统计展示', icon: 'chart', affix: true }
          }
        ]
      }
    ]
  }
]

export const asyncRoutes = []

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
