<template>
  <el-container>
    <el-header class="header" height="auto">
      <LogoAndNav page-index="6"></LogoAndNav>
    </el-header>
    <el-container class="container slide-content">
      <SystemSettingsSidebar></SystemSettingsSidebar>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SystemSettingsSidebar from "../../components/admin/SystemSettings/SystemSettingsSidebar";
import LogoAndNav from "../../views/admin/LogoAndNav";
export default {
  data() {
    return {
      pageAddress: "6"
    };
  },
  components: {
    SystemSettingsSidebar,
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
