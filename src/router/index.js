import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import axios from "axios";

// axios interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.error(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    console.error(error);
    return Promise.reject(error);
  }
);

// import router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

router.beforeEach(function (transition) {
});

router.afterEach(function (transition) {
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let user;
    Auth.currentAuthenticatedUser()
      .then((data) => {
        if (data && data.signInUserSession) {
          user = data;
        }
        next();
      })
      .catch((e) => {
        next({
          path: "/auth",
        });
      });
  } else {
    next();
  }
});

export default router;
