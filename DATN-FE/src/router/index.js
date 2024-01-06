import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import("../views/Homeview.vue"),
  },
  {
    name: 'Cart',
    path: '/cart',
    component: () => import("../views/Cartview.vue"),
  },
  {
    name: 'productDetail',
    path: '/products/:id',
    component: () => import("../views/ProductDetailsview.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: '/edit-profile',
    name: 'editProfile',
    component: () => import("../views/EditProfile.vue"),
  },
  // {
  //   path: '/login-with-phone',
  //   name: 'LoginWithPhone',
  //   component: () => import("../views/LoginWithPhone.vue"),
  // },
  {
    path: '/blog',
    children: [
      {
        path: '',
        name: 'blog',
        component: () => import("../views/Blogview.vue")
      },
      {
        path: ':id',
        name: 'blogDetail',
        component: () => import("../views/BlogDetailview.vue")
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/Aboutview.vue")
  },
  {
    path: '/404',
    name: '404',
    component: () => import("../views/PageNotFound.vue")
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: () => import("../views/Shopview.vue")
  },
  {
    path: '/admin/chat',
    name: 'chatbox',
    component: () => import("../views/Admin/ChatView.vue")
  },
  {
    path: '/admin',
    component: () => import("../layouts/Admin/index.vue"),
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            name: 'categories',
            component: () => import("../views/Admin/Category/CategoryView.vue")
          },
          {
            path: 'create',
            name: 'createCategories',
            component: () => import("../views/Admin/Category/CategoryFormView.vue")
          },
          {
            path: ':id/update',
            name: 'updateCategories',
            component: () => import("../views/Admin/Category/CategoryFormView.vue")
          },
        ]
      },
      {
        path: 'chat',
        name: 'chatbox',
        component: () => import("../views/Admin/ChatView.vue")
      },
      {
        path: 'blogs',
        children: [
          {
            path: '',
            name: 'blogs',
            component: () => import("../views/Admin/Blog/BlogView.vue")
          },
          {
            path: 'create',
            name: 'createBlogs',
            component: () => import("../views/Admin/Blog/BlogFormView.vue")
          },
          {
            path: ':id/update',
            name: 'updateBlogs',
            component: () => import("../views/Admin/Blog/BlogFormView.vue")
          },
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            name: 'products',
            component: () => import("../views/Admin/Product/ProductView.vue")
          },
          {
            path: 'create',
            name: 'createProducts',
            component: () => import("../views/Admin/Product/ProductFormView.vue")
          },
          {
            path: ':id/update',
            name: 'updateProducts',
            component: () => import("../views/Admin/Product/ProductFormView.vue")
          },
        ]
      },
      {
        path: '',
        name: 'dashboard',
        component: () => import("../views/Admin/Dashboard.vue")
      },
      {
        path: 'customers',
        children: [
          {
            path: '',
            name: 'customers',
            component: () => import("../views/Admin/Customer/CustomerView.vue")
          },
          {
            path: ':id/update',
            name: 'updateCustomers',
            component: () => import("../views/Admin/Customer/CustomerFormView.vue")
          },
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            name: 'orders',
            component: () => import("../views/Admin/Order/OrderView.vue")
          },
          {
            path: ':id/update',
            name: 'updateOrders',
            component: () => import("../views/Admin/Order/OrderFormView.vue")
          },
        ]
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
