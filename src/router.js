import Vue from "vue";
import Router from "vue-router";
import academy from "@/landings/academy/academy";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/academy",
      name: "academy",
      component: academy
    }
    /*
    {
      path: "/academy",
      name: "academy",
      component: () => import("./landings/academy/academy.vue")
    }
*/
  ]
});
