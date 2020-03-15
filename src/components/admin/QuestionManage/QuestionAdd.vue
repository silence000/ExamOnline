<template>
  <el-row>
    <!-- 标题 -->
    <el-col :span="24">
      <div class="title">
        <h3><i class="fa fa-edit"></i> 添加试题</h3>
      </div>
    </el-col>
    <!-- 主体 -->
    <el-col :span="24" class="content">
      <div class="input-box">
        <span class="small-title">试题类型：</span>
        <el-select v-model="question_type" placeholder="请选择" value="">
          <el-option
            v-for="item in question_type_options"
            :key="item.question_type"
            :label="item.label"
            :value="item.question_type"
          >
          </el-option>
        </el-select>
      </div>
      <div class="input-box">
        <span class="small-title">知识点：</span>
        <el-transfer
          v-model="point_value"
          :titles="point_title"
          :data="point_data"
          :button-texts="['删除', '添加']"
        ></el-transfer>
      </div>
      <div class="input-box">
        <span class="small-title">试题内容：</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="test_content"
        >
        </el-input>
      </div>
      <div class="input-box">选项</div>
      <div class="input-box">
        <span class="small-title">A：</span>
        <el-input v-model="test_optionA" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">B：</span>
        <el-input v-model="test_optionB" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">C：</span>
        <el-input v-model="test_optionC" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">D：</span>
        <el-input v-model="test_optionD" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">正确答案：</span>
        <el-select v-model="answer_value" placeholder="请选择" value="">
          <el-option
            v-for="item in answer_options"
            :key="item.answer_value"
            :label="item.label"
            :value="item.answer_value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="input-box">
        <span class="small-title">难度：</span>
        <el-input v-model="difficulty" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">来源：</span>
        <el-input v-model="reference" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">考点：</span>
        <el-input v-model="examing_point" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">关键字：</span>
        <el-input v-model="keyword" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="small-title">题目解析：</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="analysis"
        ></el-input>
      </div>
      <el-button type="primary">保存</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    // 生成知识点内容
    // eslint-disable-next-line no-unused-vars
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      // 试题类型
      question_type_options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      question_type: "",
      // 知识点
      point_data: generateData(),
      point_value: [1, 4],
      point_title: ["待选知识点", "已选知识点"],
      // 试题内容
      test_content: "",
      // 试题选项
      test_optionA: "",
      test_optionB: "",
      test_optionC: "",
      test_optionD: "",
      // 正确答案
      answer_options: [
        {
          value: "选项1",
          label: "A"
        },
        {
          value: "选项2",
          label: "B"
        },
        {
          value: "选项3",
          label: "C"
        },
        {
          value: "选项4",
          label: "D"
        }
      ],
      answer_value: "", // 正确答案
      difficulty: "", // 难度
      reference: "", // 来源
      examing_point: "", // 考点
      keyword: "", // 关键字
      analysis: "" // 题目解析
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
    width: 70px;
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
