export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index.vue"),
    // children: [
    //   {
    //     path: "/login",
    //     component: () => import("../views/Login.vue"),
    //   },
    // ],
  },
  {
    path: "/login",
    name: 'Login',
    component: () => import("../views/Login.vue"),
    meta: { layout: "AppMainLayout" },
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
    meta: { layout: "AppMainLayout" },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: { layout: "AppMainLayout" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: "AppMainLayout" },
  },
];
