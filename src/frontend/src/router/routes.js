export default [
  {
    path: '/',
    name: 'IndexHome',
    component: () => import('../views/Index.vue'),
    meta: { layout: 'AppLayoutMain' },
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
    meta: { layout: 'AppLayoutDefault' },
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: { layout: 'AppLayoutDefault' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta: { layout: 'AppLayoutDefault' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { layout: 'AppLayoutDefault' },
  },
];
