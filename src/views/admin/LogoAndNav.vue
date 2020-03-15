<template>
  <div>
    <!-- Logo -->
    <div class="header-content">
      <div><span>网站管理系统</span></div>
      <div>
        <el-link class="login-tag">张三</el-link> |
        <el-link class="login-tag">
          <i class="fa fa-sign-out-alt"></i>退出
        </el-link>
      </div>
    </div>
    <!-- 导航 -->
    <div class="nav-content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <i class="fa fa-home"></i> 网站首页
        </el-menu-item>
        <el-menu-item index="2">
          <i class="fa fa-edit"></i> 试题管理
        </el-menu-item>
        <el-menu-item index="3">
          <i class="fa fa-file-alt"></i> 试卷管理
        </el-menu-item>
        <el-menu-item index="4">
          <i class="fa fa-user"></i> 会员管理
        </el-menu-item>
        <el-menu-item index="5">
          <i class="fa fa-cloud"></i> 知识点管理
        </el-menu-item>
        <el-menu-item index="6">
          <i class="fa fa-cogs"></i> 网站设置
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoAndNav",
  props: {
    pageIndex: {
      type: String,
      required: true,
      default: "2"
    }
  },

  data() {
    return {
      activeIndex: this.pageIndex
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      if (key === "2") {
        this.switchToComponent("QuestionManage");
      }
      if (key === "3") {
        this.switchToComponent("PaperManage");
      }
      if (key === "4") {
        this.switchToComponent("UserManage");
      }
    },
    switchToComponent(path) {
      const location = "/admin/" + path;
      if (this.$route.path !== location) {
        this.$router.push(location);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixins";
@import "../../assets/scss/variables";
.header {
  padding: 0;
  border-top: 3px solid $header-line-color;
  .header-content {
    @include content-center;
    height: 60px;
    div:nth-child(1) {
      float: left;
      span {
        font-size: $title-fontsize;
        line-height: 60px;
        color: $title-fontcolor;
        font-weight: 700;
      }
    }
    div:nth-child(2) {
      float: right;
      width: 85px;
      height: 25px;
      padding: 2px 14px 1px 14px;
      background-color: $header-line-color;
      color: #ffffff;
      .login-tag {
        font-size: $banner-fontsize;
        color: #ffffff;
        &:hover {
          text-decoration: underline #ffffff;
        }
      }
    }
  }
  .nav-content {
    background-color: $navBackground-color;
    border-top: 1px solid $navBorder-line-color;
    border-bottom: 1px solid $navBorder-line-color;
    height: 62px;
    margin-bottom: 35px;
    .el-menu-demo {
      @include content-center;
      border: none;
      .el-menu-item {
        font-size: $banner-fontsize !important;
        font-weight: 700;
        color: $header-fontcolor !important;
      }
      .is-active {
        border-bottom: 3px solid $navActive-line-color;
      }
    }
  }
}
</style>
