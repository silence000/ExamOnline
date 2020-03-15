<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-cloud-upload-alt"></i> 修改试卷</h3>
      </div>
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
</style>
