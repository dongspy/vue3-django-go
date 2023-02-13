import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
import Tasks from "../components/Tasks.vue"


//全局状态控制引入
// import store from '../store/store'

//异步加载首页
// var home = function(resolve) {
//   require.ensure(['../views/home/home'], () => {
//     resolve(require('../views/home/home'))
//   }, 'home')
// };

import home from '../views/home/home.vue'
import head from '../views/head/head.vue'
import footer from '../views/footer/footer.vue'
import list from '../views/list/list.vue'
import index from '../views/index/index.vue'
import loginHead from '../views/loginHead/loginHead.vue'
import login from '../views/login/login.vue'
import shophead from '../views/head/shophead.vue'
import cart from '../views/cart/cart.vue'
import productDetail from '../views/productDetail/productDetail.vue'
import member from '../views/member/member.vue'
import message from '../views/member/message.vue'
import receive from '../views/member/receive.vue'
import order from '../views/member/order.vue'
import orderDetail from '../views/member/orderDetail.vue'
import collection from '../views/member/collection.vue'
import userinfo from '../views/member/userinfo.vue'
import register from '../views/register/register.vue'
import app from '../views/app/app.vue'




const routes = [
  { path: '/test/', component: Tasks },
  // { path: "/test2/", component: home},
  // {
  //   path: '/login/',
  //   name: 'login',
  //   components: {
  //     head: loginHead,
  //     content: login,
  //     footer: footer
  // },
  // props: { head: true, content: false, footer:false  }
// },

  // {
  //   path: '/test/',
  //   name: 'test',
  //   components:Tasks

  // },

  
  {
  path: '/app',
  component: app,
  children: [
    {
      path: 'login',
      name: 'login',
      components: {
        head: loginHead,
        content: login,
        footer: footer
      },
      meta: {
        title: '登录',
        need_log: false
      }
    },
    {
      path: 'register',
      name: 'register',
      components: {
        head: loginHead,
        content: register,
        footer: footer
      },
      meta: {
        title: '注册',
        need_log: false
      }
    },
    {
      path: 'home',
      components: {
        head: head,
        content: home,
        footer: footer,
        // need_log: false
      },
      children: [
        {
          path: 'list/:id',
          name: 'list',
          component: list,
          meta: {
            title: '列表',
            need_log: false
          }
        },
        {
          path: 'search/:keyword',
          name: 'search',
          component: list,
          meta: {
            title: '搜索',
            need_log: false
          }
        },
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: {
            title: '首页',
            need_log: false
          }
        },
        {
          path: 'productDetail/:productId',
          name: 'productDetail',
          component: productDetail,
          meta: {
            title: '商品详情',
            need_log: false
          }
        },
        {
          path: 'member',
          name: 'member',
          component: member,
          children: [
            {
              path: 'message',
              name: 'message',
              component: message,
              meta: {
                title: '我的留言',
                need_log: true
              }
            },
            {
              path: 'receive',
              name: 'receive',
              component: receive,
              meta: {
                title: '收件人信息',
                need_log: true
              }
            },
            {
              path: 'order',
              name: 'order',
              component: order,
              meta: {
                title: '我的订单',
                need_log: true
              }
            },
            {
              path: 'orderDetail/:orderId',
              name: 'orderDetail',
              component: orderDetail,
              meta: {
                title: '我的订单',
                need_log: true
              }
            },
            {
              path: 'collection',
              name: 'collection',
              component: collection,
              meta: {
                title: '我的收藏',
                need_log: true
              }
            },
            {
              path: 'userinfo',
              name: 'userinfo',
              component: userinfo,
              meta: {
                title: '用户信息',
                need_log: true
              }
            },
          ]
        }
      ]
    },
    {
      path: 'shoppingcart',
      components: {
        head: shophead,
        content: home,
        footer: footer
      },
      children: [
        {
          path: 'cart',
          name: 'cart',
          component: cart,
          meta: {
            title: '购物车',
            need_log: true
          }
        }
      ]
    }

  ]
}

]

// const routes = [];
const routes2 = [
  { path: '/', component: Tasks },
  // { path: '/about', component: About },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;