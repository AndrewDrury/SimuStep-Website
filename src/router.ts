import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AboutUs from "./views/AboutUs.vue";
import Blog from "./views/Blog.vue";
import BlogPost from "./views/BlogPost.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./views/NotFound.vue";
import Why from "./views/Why.vue";
Vue.use(Router);

export default new Router({
  // mode: "history", //Ifxcommented out, use hash mode
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog/:id",
      name: "blogPost",
      component: BlogPost,
    },
    {
      path: "/why",
      name: "why",
      component: Why,
    },
    {
      path: "/aboutus",
      name: "aboutUs",
      component: AboutUs,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1));
      if (element) {
        return window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});
