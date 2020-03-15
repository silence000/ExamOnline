<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-list-ul"></i> 添加知识点</h3>
      </div>
    </el-col>
    <!-- 内容 -->
    <el-col :span="24" class="content">
      <div class="input-box">
        <span class="small-title">知识点名：</span>
        <el-input v-model="point_name" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">知识点描述：</span>
        <el-input
          v-model="point_description"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <el-button type="primary">确认添加</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      point_name: "",
      point_description: ""
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/mixins";
@import "../../../assets/scss/variables";
.title {
  @include admin-content-title;
}
.content {
  border-top: solid 1px $navBorder-line-color;
  font-size: $default-text-fontsize;
  .small-title {
    display: inline-block;
    width: 100px;
    height: 26px;
    color: $default-text-color;
    text-align: right;
  }
  .input-box {
    margin-top: 10px;
    color: $default-text-color;
  }
  .el-input {
    width: 200px;
  }
}
</style>
