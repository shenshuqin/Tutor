import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import Register from '@/components/Login/Register'
import Retrieve from '@/components/Login/Retrieve'
import Enter from '@/components/Login/Enter'
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
import Wallet from '@/components/Wallet/wallet'
import Attention from '@/components/Attention/attention'
import Record from '@/components/Record/record'
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
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/job/jobdetail',
      name: 'JobDetail',
      component: JobDetail
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/login',
      name: 'Login',
      component:  Login
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
      component: Register
    },
    {
      path: '/retrieve',
      name: 'Retrieve',
      component: Retrieve
    },
    {
      path: '/enter',
      name: 'Enter',
      component: Enter
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/usercenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children:[
        { path:'/usercenter',name:'Personal',component: Personal,},
        { path:'/usercenter/publish',name:'Publish',component: Publish,},
        { path:'/usercenter/account',name:'Account',component: Account,},
        { path:'/usercenter/wallet',name:'Wallet',component: Wallet,},
        { path:'/usercenter/attention',name:'Attention',component: Attention,},
        { path:'/usercenter/record',name:'Record',component: Record,},
        { path:'/usercenter/collect',name:'Collect',component: Collect,},
        { path:'/usercenter/evaluate',name:'Evaluate',component: Evaluate,},
        { path:'/usercenter/privacy',name:'Privacy',component: Privacy,},
        { path:'/usercenter/orderform',name:'Orderform',component: Orderform,},
      ]
    },
    // {
    //   path: '/calender',
    //   name: 'Calender',
    //   component:Calender
    // },
    // {
    //   path: '/usercenter/publish',
    //   name: 'Publish',
    //   component:Publish
    // },
    // {
    //   path: '/usercenter/account',
    //   name: 'Account',
    //   component:Account
    // },
    // {
    //   path: '/usercenter/wallet',
    //   name: 'Wallet',
    //   component:Wallet
    // },
    // {
    //   path: '/usercenter/attention',
    //   name: 'Attention',
    //   component:Attention
    // },
    // {
    //   path: '/usercenter/record',
    //   name: 'Record',
    //   component:Record
    // },{
    //   path:'/usercenter/collect',
    //   name: 'Collect',
    //   component:Collect
    // },
    // {
    //   path:'/usercenter/evaluate',
    //   name: 'Evaluate',
    //   component:Evaluate
    // },
    // {
    //   path:'/usercenter/privacy',
    //   name: 'Privacy',
    //   component:Privacy
    // },
    {
      path:'/takecourse',
      name: 'TakeCourse',
      component:TakeCourse
    },
    // {
    //   path:'/usercenter/orderform',
    //   name: 'Orderform',
    //   component:Orderform
    // },
    {
      path:'/help',
      name: 'Help',
      component:Help
    },
    {
      path:'/vmenber',
      name: 'Vmenber',
      component:Vmenber
    },
    {
      path:'/orderinfo',
      name: 'Orderinfo',
      component:Orderinfo
    },
    {
      path:'/week',
      name: 'Week',
      component:Week
    },
    {
      path:'/test',
      name: 'test',
      component:Test
    },
    {
      path:'/accuse',
      name: 'Accuse',
      component:Accuse
    }
  ]
})
