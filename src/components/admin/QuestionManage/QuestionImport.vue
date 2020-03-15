<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-cloud-upload-alt"></i> 导入试题</h3>
      </div>
    </el-col>
    <el-col :span="24" class="content">
      <br />
      <div>下载模板: <el-link type="primary">点击下载</el-link></div>
      <br />
      <div>上传文件: 此处为上传后的文件名</div>
      <br />
      <el-button>提交</el-button>
    </el-col>
  </el-row>
</template>

<script></script>

<style scoped lang="scss">
@import "../../../assets/scss/mixins";
@import "../../../assets/scss/variables";
.title {
  @include admin-content-title;
}
.content {
  font-size: $default-text-fontsize;
  color: $default-text-color;
  border-top: solid 1px $navBorder-line-color;
}
</style>
