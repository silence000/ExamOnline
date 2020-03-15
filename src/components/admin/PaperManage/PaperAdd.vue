<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-pen-square"></i> 创建新试卷</h3>
      </div>
    </el-col>
    <!-- 内容 -->
    <el-col :span="24" class="content">
      <div class="input-box">
        <span class="small-title">试卷名称：</span>
        <el-input v-model="paper_name" placeholder="请输入内容"></el-input>
      </div>
      <div class="select-box">
        <span class="small-title">试题类型：</span>
        <el-select v-model="make_paper_type" placeholder="请选择" value="">
          <el-option
            v-for="item in make_paper_options"
            :key="item.question_type"
            :label="item.label"
            :value="item.question_type"
          >
          </el-option>
        </el-select>
      </div>
      <div class="select-box">
        <span class="small-title">试卷类型：</span>
        <el-select v-model="paper_type_type" placeholder="请选择" value="">
          <el-option
            v-for="item in paper_type_options"
            :key="item.question_type"
            :label="item.label"
            :value="item.question_type"
          >
          </el-option>
        </el-select>
      </div>
      <div class="input-box">
        <span class="small-title">及格分数：</span>
        <el-input v-model="pass_score" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">时长（分钟）：</span>
        <el-input v-model="total_time" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box" style="height: 250px">
        <span class="small-title" style="float: left">题型分布：</span>
        <div class="small-container">
          <div class="small-content">
            <span class="small-title-content">单选题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
          <div class="small-content">
            <span class="small-title-content">多选题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
          <div class="small-content">
            <span class="small-title-content">判断题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
          <div class="small-content">
            <span class="small-title-content">填空题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
          <div class="small-content">
            <span class="small-title-content">简答题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
          <div class="small-content">
            <span class="small-title-content">论述题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
          <div class="small-content">
            <span class="small-title-content">分析题 </span>
            <el-input
              v-model="single_choice"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 道，</span>
            <span class="small-title-content">每道题 </span>
            <el-input
              v-model="single_choice_point"
              class="el-input--small el-input-small"
            ></el-input>
            <span> 分</span>
          </div>
        </div>
      </div>
      <div class="input-box">
        <span class="small-title">总分：</span>
        <el-input v-model="total_score" placeholder="请输入内容"></el-input>
      </div>
      <el-button type="primary">下一步</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      paper_name: "", // 试卷名称
      pass_score: "", // 及格分数
      total_time: "", // 时长(分钟)
      // 组卷方式
      make_paper_options: [
        {
          value: "选项1",
          label: "自动组卷"
        },
        {
          value: "选项2",
          label: "手动组卷"
        }
      ],
      make_paper_type: "",
      // 试卷类型
      paper_type_options: [
        {
          value: "选项1",
          label: "专家试卷"
        },
        {
          value: "选项2",
          label: "模拟考试"
        },
        {
          value: "选项3",
          label: "随机试卷"
        }
      ],
      paper_type_type: "",
      // 题型
      single_choice: "",
      multiple_choice: "",
      judge: "",
      gap_filling: "",
      short_answer: "",
      essay_question: "",
      analysis_problem: "",
      single_choice_point: "",
      multiple_choice_point: "",
      judge_point: "",
      gap_filling_point: "",
      short_answer_point: "",
      essay_question_point: "",
      analysis_problem_point: "",
      // 总分
      total_score: ""
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
