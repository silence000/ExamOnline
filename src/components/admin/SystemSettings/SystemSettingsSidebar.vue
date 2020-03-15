<template>
  <el-aside width="200px">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo slide-style"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" @click="switchToComponent('SystemBackup')">
        <i class="fa fa-list-ul"></i>
        <span slot="title"> 数据备份</span>
      </el-menu-item>
      <el-menu-item index="2" @click="switchToComponent('SystemAdminList')">
        <i class="fa fa fa-user"></i>
        <span slot="title"> 管理员列表</span>
      </el-menu-item>
      <el-menu-item index="3" @click="switchToComponent('SystemAdminAdd')">
        <i class="fa fa-pen-square"></i>
        <span slot="title"> 添加管理员</span>
      </el-menu-item>
      <el-menu-item index="4" @click="switchToComponent('SystemExamBank')">
        <i class="fa fa-chart-bar"></i>
        <span slot="title"> 题库列表</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "SystemSettingsSidebar",
  methods: {
    switchToComponent(path) {
      const location = "/admin/SystemSettings/" + path;
      if (this.$route.path !== location) {
        this.$router.push(location);
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/mixins";
@import "../../../assets/scss/variables";
.slide-content {
  margin-top: 35px;
  .slide-style {
    text-align: center;
  }
  .el-menu {
    border: 0;
    .el-menu-item {
      span {
        @extend .el-menu-item;
      }
    }
    .is-active {
      color: #ffffff !important;
      background-color: $sliderActive-bg-Color;
      span {
        color: #ffffff !important;
      }
    }
  }
}
</style>
