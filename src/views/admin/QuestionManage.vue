<template>
  <el-container>
    <el-header class="header" height="auto">
      <LogoAndNav page-index="2"></LogoAndNav>
    </el-header>
    <el-container class="container slide-content">
      <ExamManageSidebar></ExamManageSidebar>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ExamManageSidebar from "../../components/admin/QuestionManage/QuestionManageSidebar";
import LogoAndNav from "../../views/admin/LogoAndNav";
export default {
  data() {
    return {
      pageAddress: "2"
    };
  },
  components: {
    ExamManageSidebar,
    LogoAndNav
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixins";
.container {
  @include content-center;
}
.el-main {
  padding: 0 0 0 35px;
}
</style>
