import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/views/admin'

import phone from '../views/phone/phone'
import phone1 from '../views/phone/phone1'
import phone2 from '../views/phone2/phone2'
import phone3 from '../views/phone3/phone3'
import phone4 from '../views/phone4/phone4'
import phone5 from '../views/phone5/phone5'
import phone6 from '../views/phone6/phone6'
import phone7 from '../views/phone7/phone7'
import phone8 from '../views/phone8/phone8'
import phone9 from '../views/phone9/phone9'
import phone10 from '../views/phone10/phone10'


Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: admin,
    },

    {
      path:'/phone',
      name:'phone',
      component:admin,
      alias:'手机 电话卡',
      children:[
        {path:'phone',name:'phone',component:phone,hidden:true,alias:'手机'},
        {path:'phone1',name:'phone1',component:phone1,hidden:true,alias:'电话卡'},
      ]
    },
        {
      path:'/phone2',
      name:'phone2',
      component:admin,
      alias:'笔记本',
      children:[
        {path:'phone2',name:'phone2',component:phone2,hidden:true,alias:'笔记本'},
      ]
    },
        {
      path:'/phone3',
      name:'phone3',
      component:admin,
      alias:'电视 盒子',
      children:[
        {path:'phone3',name:'phone3',component:phone3,hidden:true,alias:'电视'},
      ]
    },
        {
      path:'/phone4',
      name:'phone4',
      component:admin,
      alias:'路由器 智能硬件',
      children:[
        {path:'phone4',name:'phone4',component:phone4,hidden:true,alias:'路由器'},
      ]
    },
        {
      path:'/phone5',
      name:'phone5',
      component:admin,
      alias:'移动电源 电池 插线板',
      children:[
        {path:'phone5',name:'phone5',component:phone5,hidden:true,alias:'移动电源'},
      ]
    },
        {
      path:'/phone6',
      name:'phone6',
      component:admin,
      alias:'耳机 音箱',
      children:[
        {path:'phone6',name:'phone6',component:phone6,hidden:true,alias:'耳机'},
      ]
    },
        {
      path:'/phone7',
      name:'phone7',
      component:admin,
      alias:'保护套 贴膜',
      children:[
        {path:'phone7',name:'phone7',component:phone7,hidden:true,alias:'保护套'},
      ]
    },
        {
      path:'/phone8',
      name:'phone8',
      component:admin,
      alias:'线材 支架 存储卡',
      children:[
        {path:'phone8',name:'phone8',component:phone8,hidden:true,alias:'线材'},
      ]
    },
        {
      path:'/phone9',
      name:'phone9',
      component:admin,
      alias:'箱包 服饰 鞋 眼镜',
      children:[
        {path:'phone9',name:'phone9',component:phone9,hidden:true,alias:'箱包'},
      ]
    },
        {
      path:'/phone10',
      name:'phone10',
      component:admin,
      alias:'米兔 生活周边',
      children:[
        {path:'phone10',name:'phone10',component:phone10,hidden:true,alias:'米兔'},
      ]
    },

  ] 
})
export default router
