<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-chart-bar"></i> 管理员列表</h3>
      </div>
    </el-col>
    <!-- 选择 -->
    <el-col :span="24" class="options">
      <!-- 表格 -->
      <el-col :span="24" class="tables">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="ID" width="40"></el-table-column>
          <el-table-column prop="username" label="用户名"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="user_group" label="用户组"> </el-table-column>
          <el-table-column prop="register_time" label="注册时间">
          </el-table-column>
          <el-table-column prop="status" label="状态"> </el-table-column>
          <el-table-column prop="operate" label="操作"> </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          username: "Admin",
          email: "silence000@foxmail.com",
          user_group: "超级管理员",
          register_time: "2020.3.15",
          status: ["启用", "注销", "其他"],
          operate: ["禁用", "启用"]
        },
        {
          id: "1",
          username: "Admin",
          email: "silence000@foxmail.com",
          user_group: "超级管理员",
          register_time: "2020.3.15",
          status: ["启用", "注销", "其他"],
          operate: ["禁用", "启用"]
        }
      ]
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
</style>
