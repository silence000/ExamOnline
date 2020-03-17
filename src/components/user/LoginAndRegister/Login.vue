<template>
  <div class="container">
    <div class="login">
      <h3>登录在线考试系统</h3>
      <div class="entries">
        <span class="input-box-name">用户名：</span>
        <el-input v-model="user.username" placeholder="Username"></el-input>
      </div>
      <div class="entries">
        <span class="input-box-name">密码：</span>
        <el-input
          v-model="user.password"
          placeholder="password"
          show-password
        ></el-input>
      </div>
      <el-button @click="login">登录</el-button>
      <el-button @click="exit">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      const that = this; // 保存this对象
      let parameters = ""; // 待拼接参数, this.user为传递进POST的参数
      for (let [key, value] of Object.entries(this.user)) {
        parameters += `${key}=${value}&`;
      }
      // eslint-disable-next-line no-undef
      axios
        .post("http://localhost:8890/user/login", parameters)
        .then(function(response) {
          if (response.data.username != null) {
            console.log(response.data);
            that.$store.state.user.username = response.data.username;
            that.$store.state.user.password = response.data.password;
            console.log(that.$store.state.user.username);
            console.log(that.$store.state.user.password);
            that.$message({
              showClose: true,
              message: "登录成功! ",
              type: "success"
            });
            if (response.data.classID + "" === "0") {
              that.$router.push("/admin/QuestionManage/");
            } else {
              alert("普通用户, 跳转到前台界面");
            }
          } else {
            that.$message({
              showClose: true,
              message: "登录失败, 请重新登录! ",
              type: "error"
            });
            // 清空输入框中的数
            that.user.username = "";
            that.user.password = "";
          }
        })
        .catch(function(error) {
          that.$message({
            showClose: true,
            message: "登录失败, 远程服务器出错! ",
            type: "error"
          });
          console.log(error);
        });
    },
    exit() {
      alert("再见! ");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/mixins";
@import "../../../assets/scss/variables";
.container {
  @include content-center;
  color: $default-text-color;
  .login {
    width: 450px;
    height: 250px;
    margin: 0 auto 0 auto;
    border: 1px solid $navBorder-line-color;
    border-radius: 2px;
    background-color: $navBackground-color;
    text-align: center;
    .entries + .entries {
      margin-top: 10px;
    }
    .entries:last-of-type {
      margin-bottom: 35px;
    }
    .input-box-name {
      width: 70px;
      display: inline-block;
      text-align: right;
    }
    .el-input {
      width: 200px;
    }
  }
}
</style>
