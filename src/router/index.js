import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactMe from "@/views/ContactMe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact-me",
      name: "Contact Me",
      component: ContactMe,
    },
  ],
  scrollBehavior(to) {
    console.log(to);
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

export default router;
