export default [
  {
    path: '/',
    name: 'IndexHome',
    component: () => import('../views/Index.vue'),
    meta: { layout: 'AppLayoutDefault' },
    // children: [
    //   {
    //     path: '/login',
    //     component: () => import('../views/Login.vue'),
    //   },
    // ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { layout: 'AppLayoutMain' },
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: { layout: 'AppLayoutMain' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta: { layout: 'AppLayoutMain' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { layout: 'AppLayoutMain' },
  },
];
