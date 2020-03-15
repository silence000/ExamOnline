<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-list-ul"></i> 试卷管理</h3>
      </div>
    </el-col>
    <!-- 选择 -->
    <el-col :span="24" class="options">
      <div>
        <span>分类: </span>
        <ul>
          <li class="inactive"><el-link>全部</el-link></li>
          <li><el-link>随机组卷</el-link></li>
          <li><el-link>模拟考试</el-link></li>
          <li><el-link>专家试卷</el-link></li>
        </ul>
      </div>
    </el-col>
    <!-- 表格 -->
    <el-col :span="24" class="tables">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="40"></el-table-column>
        <el-table-column
          prop="name"
          label="试题名称"
          width="250"
        ></el-table-column>
        <el-table-column prop="time" label="时长"> </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="author" label="创建人"> </el-table-column>
        <el-table-column prop="operate" label="操作"> </el-table-column>
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
      tableData: [
        {
          id: "1",
          name: "XX阶段性测试题",
          type: "试题类型",
          time: "50分钟",
          author: "Admin",
          operate: ["修改内容", "修改属性", "上线", "下线", "删除"]
        },
        {
          id: "2",
          name: "XX阶段性测试题",
          type: "试题类型",
          time: "50分钟",
          author: "Admin",
          operate: ["修改内容", "修改属性", "上线", "下线", "删除"]
        },
        {
          id: "3",
          name: "XX阶段性测试题",
          type: "试题类型",
          time: "50分钟",
          author: "Admin",
          operate: ["修改内容", "修改属性", "上线", "下线", "删除"]
        },
        {
          id: "4",
          name: "XX阶段性测试题",
          type: "试题类型",
          time: "50分钟",
          author: "Admin",
          operate: ["修改内容", "修改属性", "上线", "下线", "删除"]
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
.options {
  border-top: solid 1px $navBorder-line-color;
  div {
    height: 26px;
    font-size: $content-details-fontsize;
    span {
      float: left;
      font-weight: 700;
      display: inline-block;
      width: 70px;
      text-align: right;
      margin-right: 10px;
    }
    ul {
      list-style: none;
      li {
        float: left;
        padding: 0 10px 0 10px;
        a {
          color: $header-fontcolor;
        }
      }
      .inactive {
        background-color: #409eff;
        border-radius: 3px;
        a {
          color: #ffffff;
        }
      }
    }
  }
}
.el-table {
  font-size: $table-fontsize;
  color: $table-color;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
</style>
