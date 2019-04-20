import Vue from "vue";
import Router from "vue-router";
import cover from "@/views/cover.vue";
// import discovery from "./views/cover.vue";
// import friends from "./views/cover.vue";
// import my from "./views/cover.vue";
// import videos from "./views/cover.vue";
import index from "@/components/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "cover",
      component: cover
    },
    {
      path: "/index",
      name: "index",
      component: index
    }
  ]
});
