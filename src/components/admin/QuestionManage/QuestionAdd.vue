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
        <el-select v-model="question_type_data" placeholder="请选择" value="">
          <el-option
            v-for="item in question_type_options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="input-box">
        <span class="small-title">知识点：</span>
        <el-transfer
          v-model="point_select"
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
      <div v-if="display">
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
      </div>
      <div class="input-box">
        <span class="small-title">正确答案：</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="answers"
        >
        </el-input>
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
      <el-button type="primary" @click="submit">提交</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // 题型切换显示
      display: true,
      // 试题类型
      question_type_options: [],
      question_type_data: "",
      // 知识点
      point_data: [],
      point_select: [], // 已选知识点
      point_title: ["待选知识点", "已选知识点"],
      // 试题内容
      test_content: "",
      // 试题选项
      test_optionA: "",
      test_optionB: "",
      test_optionC: "",
      test_optionD: "",
      answers: "", // 正确答案
      difficulty: "", // 难度
      reference: "", // 来源
      examing_point: "", // 考点
      keyword: "", // 关键字
      analysis: "" // 题目解析
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    question_type_data: {
      handler(newVal) {
        if (newVal + "" === "1") {
          this.display = true;
        }
        if (newVal + "" === "2") {
          this.display = false;
        }
      },
      immediate: true //页面完成渲染后立即执行
    }
  },
  methods: {
    init() {
      const that = this;
      this.$axios
        .get(
          "http://localhost:8890/admin/QuestionManage/QuestionAdd/getQuestionType"
        )
        .then(function(response) {
          that.question_type_options = response.data;
        });
      this.$axios
        .get("http://localhost:8890/admin/PointManage/getAllPoint")
        .then(function(response) {
          const temp = [];
          const datas = response.data;
          for (let i = 0; i < response.data.length; i++) {
            temp.push({
              key: datas[i].point_id,
              label: datas[i].point_name
            });
          }
          that.point_data = temp;
        });
    },
    submit() {
      const that = this; // 保存this对象
      const temp = {
        question_type_id: this.question_type_data,
        pointList: this.point_select,
        desccription: this.test_content,
        options: [
          this.test_optionA,
          this.test_optionB,
          this.test_optionC,
          this.test_optionD
        ],
        answer: this.answers,
        difficulty: this.difficulty,
        reference: this.reference,
        examing_point: this.examing_point,
        keyword: this.keyword,
        analysis: this.analysis
      };
      console.log(temp); // 输出question对象
      this.$axios({
        url:
          "http://localhost:8890/admin/QuestionManage/QuestionAdd/addQuestion",
        data: temp,
        method: "post",
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          console.log(response.data);
          if (response.data + "" === "1") {
            that.$message({
              showClose: true,
              message: "提交成功! ",
              type: "success"
            });
          } else {
            that.$message({
              showClose: true,
              message: "提交失败, 请重试! ",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
          that.$message({
            showClose: true,
            message: "提交失败, 远程服务器出错! ",
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
