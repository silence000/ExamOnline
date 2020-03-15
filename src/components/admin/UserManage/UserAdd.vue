<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-pen-square"></i> 添加会员</h3>
      </div>
    </el-col>
    <!-- 内容 -->
    <el-col :span="24" class="content">
      <div class="select-box">
        <span class="small-title">默认题库：</span>
        <el-select
          v-model="default_question_bank_type"
          placeholder="请选择"
          value=""
        >
          <el-option
            v-for="item in default_question_bank_options"
            :key="item.default_question_bank_type"
            :label="item.label"
            :value="item.default_question_bank_type"
          >
          </el-option>
        </el-select>
      </div>
      <div class="select-box">
        <span class="small-title">默认班级：</span>
        <el-select v-model="default_class_type" placeholder="请选择" value="">
          <el-option
            v-for="item in default_class_options"
            :key="item.default_class_type"
            :label="item.label"
            :value="item.default_class_type"
          >
          </el-option>
        </el-select>
      </div>
      <div class="input-box">
        <span class="small-title">用户名：</span>
        <el-input v-model="username" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">密码：</span>
        <el-input v-model="passWord" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">省份：</span>
        <el-input v-model="province" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">单位：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">部门：</span>
        <el-input v-model="department" placeholder="请输入内容"></el-input>
      </div>
      <el-button type="primary">确认添加</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // 默认题库
      default_question_bank_options: [
        {
          value: "选项1",
          label: "题库1"
        },
        {
          value: "选项2",
          label: "题库2"
        }
      ],
      default_question_bank_type: "",
      // 默认班级
      default_class_options: [
        {
          value: "选项1",
          label: "班级1"
        },
        {
          value: "选项2",
          label: "班级2"
        }
      ],
      default_class_type: "",
      username: "",
      passWord: "",
      province: "",
      company: "",
      department: ""
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
  .input-box {
    margin-top: 10px;
  }
  .select-box {
    margin-top: 10px;
  }
  .small-title {
    display: inline-block;
    width: 100px;
    height: 26px;
    line-height: 26px;
    color: $default-text-color;
    text-align: right;
  }
  .el-input {
    width: 200px;
  }
  .el-input-small {
    width: 32px;
  }
  .small-container {
    float: left;
    color: $default-text-color;
    .small-content {
      width: 235px;
    }
    .small-content + .small-content {
      margin-top: 4px;
    }
  }
}
</style>
