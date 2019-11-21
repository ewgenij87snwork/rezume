import Vue from "vue";
import Router from "vue-router";
// import academy from "@/landings/academy/academy";
import home from "@/displays/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/familyps",
      name: "familyps",
      component: () => import("./landings/familyps/familyps.vue")
    },
    {
      path: "/jelmon",
      name: "jelmon",
      component: () => import("./landings/jelmon/jelmon.vue")
    },
    {
      path: "/academy",
      name: "academy",
      component: () => import("./landings/academy/academy.vue")
    },
    {
      path: "/angrybirds",
      name: "angrybirds",
      component: () => import("./landings/angrybirds/angrybirds.vue")
    },
    {
      path: "/bino",
      name: "bino",
      component: () => import("./landings/bino/bino.vue")
    },
    {
      path: "/bizzy",
      name: "bizzy",
      component: () => import("./landings/bizzy/bizzy.vue")
    },
    {
      path: "/chart",
      name: "chart",
      component: () => import("./landings/chart/chart.vue")
    },
    {
      path: "/distantjob",
      name: "distantjob",
      component: () => import("./landings/distantjob/distantjob.vue")
    },
    {
      path: "/fashion",
      name: "fashion",
      component: () => import("./landings/fashion/fashion.vue")
    },
    {
      path: "/frontendworkbook",
      name: "frontendworkbook",
      component: () =>
        import("./landings/frontendworkbook/frontendworkbook.vue")
    }
  ]
});
