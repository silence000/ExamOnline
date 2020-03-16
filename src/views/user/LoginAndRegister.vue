<template>
  <el-container>
    <el-header class="header" height="auto">
      <LogoAndNav page-index="1"></LogoAndNav>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import LogoAndNav from "../../views/user/LogoAndNav";
export default {
  components: {
    LogoAndNav
  }
};
</script>

<style scoped lang="scss">
.el-main {
  padding: 0;
}
</style>
