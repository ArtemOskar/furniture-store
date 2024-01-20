import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/delivery",
    name: "delivery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DeliveryPage.vue")
  },
  {
    path: "/articles",
    name: "articles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArticlesPage.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue")
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactsPage.vue")
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CatalogPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
