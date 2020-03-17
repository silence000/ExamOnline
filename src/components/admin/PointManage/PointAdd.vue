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
        <el-input v-model="point.name" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">知识点描述：</span>
        <el-input v-model="point.memo" placeholder="请输入内容"></el-input>
      </div>
      <el-button type="primary" @click="addPoints">确认添加</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      point: {
        name: "",
        memo: ""
      }
    };
  },
  methods: {
    addPoints() {
      const that = this; // 保存this对象
      let parameters = ""; // 待拼接参数, this.user为传递进POST的参数
      for (let [key, value] of Object.entries(this.point)) {
        parameters += `${key}=${value}&`;
      }
      this.$axios
        .post("http://localhost:8890/admin/PointManage/PointAdd", parameters)
        .then(function(response) {
          console.log(response.data);
          if (response.data + "" === "0") {
            that.$message({
              showClose: true,
              message: "添加知识点失败, 请重新添加!",
              type: "error"
            });
          } else {
            that.$message({
              showClose: true,
              message: "知识点添加成功!",
              type: "success"
            });
          }
          that.point.name = "";
          that.point.memo = "";
        })
        .catch(function(error) {
          that.$message({
            showClose: true,
            message: "添加知识点失败, 远程服务器出错!",
            type: "error"
          });
          console.log(error);
        });
    }
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
