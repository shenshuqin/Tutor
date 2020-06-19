import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Confer from '@/components/Confer/confer'
import Login from '@/components/Login/Login'
import Register from '@/components/Login/Register'
import Retrieve from '@/components/Login/Retrieve'
import Clients from '@/components/Client/Clients'
import Client from '@/components/Client/Client'
import Home from '@/components/Home/Home'
import Swiper from '@/components/Home/swiper'
import Bubble from '@/components/Home/bubble'
import Job from '@/components/Job/job'
import JobDetail from '@/components/Job/jobdetail'
import Header from '@/components/Common/header'
import Personal from '@/components/Personal/Personal'
import PersonalCenter from '@/components/Personal/PersonalCenter'
import Calender from '@/components/Personal/calender'
import Publish from '@/components/Publish/publish'
import Account from '@/components/Account/account'
import AccountSetting from '@/components/AccountSetting/accountSetting'
import Wallet from '@/components/Wallet/wallet'
import Attention from '@/components/Attention/attention'
import Business from '@/components/Business/business'
import Collect from '@/components/Collect/collect'
import Evaluate from '@/components/Evaluate/evaluate'
import Privacy from '@/components/Privacy/Privacy'
import Orderform from '@/components/Orderform/Orderform'
import Help from '@/components/Help/help'
import Vmenber from '@/components/Vmenber/vmenber'
import Orderinfo from '@/components/Orderinfo/orderinfo'
import Week from '@/components/Personal/week'
import TakeCourse from '@/components/TakeCourse/takecourse'
import Accuse from '@/components/Accuse/accuse'
import Test from '@/components/test'
import NotFound from '@/components/NotFound/NotFound'
import PayResult from '@/components/PayResult/payresult'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/payresult',
      name: 'PayResult',
      component: PayResult,
      meta: {
        // keepAlive: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/job',
      name: 'Job',
      component: Job,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/confer',
      name: 'Confer',
      component: Confer,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/job/jobdetail',
      name: 'JobDetail',
      component: JobDetail,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/header',
      name: 'Header',
      component: Header,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      // meta: {
      //   requiresAuth: true   // 要求验证的页面
      //  }
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/bubble',
      name: 'Bubble',
      component: Bubble
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        keepAlive: false,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/retrieve',
      name: 'Retrieve',
      component: Retrieve,
      meta: {
        keepAlive: false,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/client',
      name: 'Client',
      component: Client,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/usercenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      },
      children: [
        { path: '/usercenter', name: 'Personal', component: Personal, meta: { keepAlive: true } },
        { path: '/usercenter/publish', name: 'Publish', component: Publish, meta: { keepAlive: true } },
        { path: '/usercenter/account', name: 'Account', component: Account, meta: { keepAlive: true } },
        { path: '/usercenter/accountSetting', name: 'AccountSetting ', component: AccountSetting, meta: { keepAlive: true } },
        { path: '/usercenter/wallet', name: 'Wallet', component: Wallet, meta: { keepAlive: true } },
        { path: '/usercenter/attention', name: 'Attention', component: Attention, meta: { keepAlive: true } },
        { path: '/usercenter/business', name: 'Business', component: Business, meta: { keepAlive: true } },
        { path: '/usercenter/collect', name: 'Collect', component: Collect },
        { path: '/usercenter/evaluate', name: 'Evaluate', component: Evaluate, meta: { keepAlive: true } },
        { path: '/usercenter/privacy', name: 'Privacy', component: Privacy, meta: { keepAlive: true } },
        { path: '/usercenter/orderform', name: 'Orderform', component: Orderform, meta: { keepAlive: true } }
      ]
    },
    {
      path: '/takecourse',
      name: 'TakeCourse',
      component: TakeCourse,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/vmenber',
      name: 'Vmenber',
      component: Vmenber,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/orderinfo',
      name: 'Orderinfo',
      component: Orderinfo,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/week',
      name: 'Week',
      component: Week,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    },
    {
      path: '/accuse',
      name: 'Accuse',
      component: Accuse,
      meta: {
        keepAlive: true,
        requiresAuth: true // 要求验证的页面
      }
    }
  ]
})
