import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "./registerServiceWorker";

// NPM
// import "../node_modules/normalize.css/normalize.css";

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
