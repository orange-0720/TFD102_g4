import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/aboutUs.vue"),
  },
  {
    path: "/backend",
    name: "backend",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/backend.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/checkout.vue"),
  },
  {
    path: "/checkout_s2",
    name: "checkout_s2",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/checkout_s2.vue"),
  },
  {
    path: "/entrance",
    name: "entrance",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/entrance.vue"),
  },
  {
    path: "/event_info",
    name: "event_info",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/event_info.vue"),
  },
  {
    path: "/event",
    name: "event",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/event.vue"),
  },
  {
    path: "/fruit_box",
    name: "fruit_box",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/fruit_box.vue"),
  },
  {
    path: "/fruit_introduction",
    name: "fruit_introduction",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/fruit_introduction.vue"
      ),
  },
  {
    path: "/game_page_defeat",
    name: "game_page_defeat",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/game_page_defeat.vue"),
  },
  {
    path: "/game_page_lotteryEnd",
    name: "game_page_lotteryEnd",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/game_page_lotteryEnd.vue"
      ),
  },
  {
    path: "/game_page_lotteryStart",
    name: "game_page_lotteryStart",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/game_page_lotteryStart.vue"
      ),
  },
  {
    path: "/game_page_pass",
    name: "game_page_pass",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/game_page_pass.vue"
      ),
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/game.vue"
      ),
  },



  {
    path: "/itemtest",
    name: "itemtest",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/itemtest.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/login.vue"
      ),
  },
  {
    path: "/member",
    name: "member",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/member.vue"
      ),
  },
  {
    path: "/product_introduction",
    name: "product_introduction",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/product_introduction.vue"
      ),
  },
  {
    path: "/q_a",
    name: "q_a",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/q_a.vue"
      ),
  },
  {
    path: "/shopping_page",
    name: "shopping_page",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/shopping_page.vue"
      ),
  },
  {
    path: "/vagatable_introduction",
    name: "vagatable_introduction",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/vagatable_introduction.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
