import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import "materialize-css/sass/materialize.scss";
import "materialize-css/dist/js/materialize";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
