<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-list-ul"></i> 会员管理</h3>
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
          <el-table-column prop="provence" label="省份"> </el-table-column>
          <el-table-column prop="company" label="单位"> </el-table-column>
          <el-table-column prop="department" label="部门"> </el-table-column>
          <el-table-column prop="profession" label="专业"> </el-table-column>
          <el-table-column prop="reg_time" label="注册时间"> </el-table-column>
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
          provence: "辽宁省",
          company: "兄弟连",
          department: "兄弟会",
          profession: "全栈攻城狮",
          reg_time: "2020.3.15",
          status: ["启用", "注销", "其他"],
          operate: ["禁用", "启用"]
        },
        {
          id: "2",
          username: "Admin",
          email: "silence000@foxmail.com",
          provence: "辽宁省",
          company: "兄弟连",
          department: "兄弟会",
          profession: "全栈攻城狮",
          reg_time: "2020.3.15",
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
