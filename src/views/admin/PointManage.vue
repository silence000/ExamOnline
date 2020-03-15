<template>
  <el-container>
    <el-header class="header" height="auto">
      <LogoAndNav page-index="5"></LogoAndNav>
    </el-header>
    <el-container class="container slide-content">
      <PointManageSidebar></PointManageSidebar>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PointManageSidebar from "../../components/admin/PointManage/PointManageSidebar";
import LogoAndNav from "../../views/admin/LogoAndNav";
export default {
  data() {
    return {
      pageAddress: "5"
    };
  },
  components: {
    PointManageSidebar,
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
