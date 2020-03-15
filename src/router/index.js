import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// 引入组件
import QuestionAdd from "../components/admin/QuestionManage/QuestionAdd";
import QuestionImport from "../components/admin/QuestionManage/QuestionImport";
import QuestionControl from "../components/admin/QuestionManage/QuestionControl";
import PaperAdd from "../components/admin/PaperManage/PaperAdd";
import PaperControl from "../components/admin/PaperManage/PaperControl";
import PaperModification from "../components/admin/PaperManage/PaperModification";
import UserAdd from "../components/admin/UserManage/UserAdd";
import UserControl from "../components/admin/UserManage/UserControl";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin/QuestionManage",
    name: "QuestionManage",
    component: () => import("../views/admin/QuestionManage.vue"),
    children: [
      {
        path: "QuestionAdd",
        name: "QuestionAdd",
        component: QuestionAdd
      },
      {
        path: "QuestionImport",
        name: "QuestionImport",
        component: QuestionImport
      },
      {
        path: "QuestionControl",
        name: "QuestionControl",
        component: QuestionControl
      }
    ]
  },
  {
    path: "/admin/PaperManage",
    name: "PaperManage",
    component: () => import("../views/admin/PaperManage.vue"),
    children: [
      {
        path: "PaperAdd",
        name: "PaperAdd",
        component: PaperAdd
      },
      {
        path: "PaperControl",
        name: "PaperControl",
        component: PaperControl
      },
      {
        path: "PaperModification",
        name: "PaperModification",
        component: PaperModification
      }
    ]
  },
  {
    path: "/admin/UserManage",
    name: "UserManage",
    component: () => import("../views/admin/UserManage.vue"),
    children: [
      {
        path: "UserAdd",
        name: "UserAdd",
        component: UserAdd
      },
      {
        path: "UserControl",
        name: "UserControl",
        component: UserControl
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history", // 使用history方式切换路由
  base: "exam-online/", // 根路径
  routes
});

export default router;
