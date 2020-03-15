<template>
  <el-aside width="200px">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo slide-style"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" @click="switchToComponent('PointList')">
        <i class="fa fa-list-ul"></i>
        <span slot="title"> 知识点列表</span>
      </el-menu-item>
      <el-menu-item index="2" @click="switchToComponent('PointAdd')">
        <i class="fa fa-pen-square"></i>
        <span slot="title"> 添加知识点</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "PointManageSidebar",
  methods: {
    switchToComponent(path) {
      const location = "/admin/PointManage/" + path;
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
