<template>
  <el-container>
    <el-header class="header" height="auto">
      <LogoAndNav page-index="4"></LogoAndNav>
    </el-header>
    <el-container class="container slide-content">
      <UserManageSidebar></UserManageSidebar>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import UserManageSidebar from "../../components/admin/UserManage/UserManageSidebar";
import LogoAndNav from "../../views/admin/LogoAndNav";
export default {
  data() {
    return {
      pageAddress: "3"
    };
  },
  components: {
    UserManageSidebar,
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
