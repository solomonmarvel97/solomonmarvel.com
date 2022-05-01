const light = () => import("@/views/light/index.vue");
const dark = () => import("@/views/dark/index.vue");

const routes = [
  {
    name: "index",
    path: "/",
    redirect: "light",
  },
  {
    name: "light",
    path: "/light",
    component: light,
  },
  {
    name: "dark",
    path: "/dark",
    component: dark,
  },
];

export default routes;
