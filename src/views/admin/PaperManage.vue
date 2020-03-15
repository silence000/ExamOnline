<template>
  <el-container>
    <el-header class="header" height="auto">
      <LogoAndNav page-index="3"></LogoAndNav>
    </el-header>
    <el-container class="container slide-content">
      <PaperManageSidebar></PaperManageSidebar>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PaperManageSidebar from "../../components/admin/PaperManage/PaperManageSidebar";
import LogoAndNav from "../../views/admin/LogoAndNav";
export default {
  data() {
    return {
      pageAddress: "3"
    };
  },
  components: {
    PaperManageSidebar,
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
