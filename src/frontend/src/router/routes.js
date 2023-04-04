export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/:login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
    ],
  },
  {
    path: "test/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
    meta: { layout: "AppMainLayout" },
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: { layout: "AppMainLayout" },
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: "AppMainLayout" },
  },
];
