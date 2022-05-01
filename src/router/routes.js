
const index = () => import("@/views/dark/index.vue");

const routes = [
  {
    name: "dark",
    path: "/",
    component: index,
  },
];

export default routes;
