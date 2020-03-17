<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-chart-bar"></i> 知识点管理</h3>
      </div>
    </el-col>
    <!-- 列表 -->
    <el-col :span="24" class="tables">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column fixed prop="point_id" label="ID" width="50">
        </el-table-column>
        <el-table-column prop="point_name" label="知识点名"> </el-table-column>
        <el-table-column prop="memo" label="描述" width="280px">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const that = this;
      this.$axios
        .get("http://localhost:8890/admin/PointManage/getAllPoint")
        .then(function(response) {
          that.tableData = response.data;
        });
    },
    deleteRow(index, rows) {
      const dataIndex = this.tableData[index].point_id;
      const that = this;
      this.$axios
        .post(
          `http://localhost:8890/admin/PointManage/deletePoint/${dataIndex}`
        )
        .then(function(response) {
          if (response.data + "" === "1") {
            that.$message({
              showClose: true,
              message: "删除成功! ",
              type: "success"
            });
            rows.splice(index, 1);
          } else {
            that.$message({
              showClose: true,
              message: "删除失败, 请重试! ",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
          that.$message({
            showClose: true,
            message: "删除失败, 远程服务器出错! ",
            type: "error"
          });
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
</style>
