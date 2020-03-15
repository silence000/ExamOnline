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
import PointAdd from "../components/admin/PointManage/PointAdd";
import PointList from "../components/admin/PointManage/PointList";
import SystemAdminAdd from "../components/admin/SystemSettings/SystemAdminAdd";
import SystemAdminList from "../components/admin/SystemSettings/SystemAdminList";
import SystemBackup from "../components/admin/SystemSettings/SystemBackup";
import SystemExamBank from "../components/admin/SystemSettings/SystemExamBank";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    // 试题管理
    path: "/admin/QuestionManage/",
    name: "QuestionManage",
    component: () => import("../views/admin/QuestionManage.vue"),
    redirect: "/admin/QuestionManage/QuestionControl",
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
    // 试卷管理
    path: "/admin/PaperManage",
    name: "PaperManage",
    component: () => import("../views/admin/PaperManage.vue"),
    redirect: "/admin/PaperManage/PaperControl",
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
    // 会员管理
    path: "/admin/UserManage",
    name: "UserManage",
    component: () => import("../views/admin/UserManage.vue"),
    redirect: "/admin/UserManage/UserControl",
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
  },
  {
    // 知识点管理
    path: "/admin/PointManage",
    name: "PointManage",
    component: () => import("../views/admin/PointManage.vue"),
    redirect: "/admin/PointManage/PointList",
    children: [
      {
        path: "PointAdd",
        name: "PointAdd",
        component: PointAdd
      },
      {
        path: "PointList",
        name: "PointList",
        component: PointList
      }
    ]
  },
  {
    // 网站设置
    path: "/admin/SystemSettings",
    name: "SystemSettings",
    component: () => import("../views/admin/SystemSettings.vue"),
    redirect: "/admin/SystemSettings/SystemBackup",
    children: [
      {
        path: "SystemAdminAdd",
        name: "SystemAdminAdd",
        component: SystemAdminAdd
      },
      {
        path: "SystemAdminList",
        name: "SystemAdminList",
        component: SystemAdminList
      },
      {
        path: "SystemBackup",
        name: "SystemBackup",
        component: SystemBackup
      },
      {
        path: "SystemExamBank",
        name: "SystemExamBank",
        component: SystemExamBank
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
