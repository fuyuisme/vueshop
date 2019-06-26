<template>
  <div class="login">
    <div class="login-box">
      <img class="logo" src="../assets/logo.png" alt="">
      <el-form :rules="loginRules" :model="loginForm" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input @keyup.enter.native="loginSubmit" type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <div>
          <el-button @click="loginSubmit" type="primary">提交</el-button>
          <el-button>重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginSubmit () {
      this.$refs.loginForm.validate(async ok => {
        if (ok) {
          const { data: res } = await this.axios.post('http://127.0.0.1:11333/api/private/v1/login', this.loginForm)
          console.log(res)
          if (res.meta.status !== 200) return this.$message.error('登录失败')
          // 保存令牌到本地
          sessionStorage.setItem('token', res.data.token)
          this.$message.success('登录成功')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style>
.login {
  height: 100%;
  background-color: #294a69;
}
.login .login-box{
  width: 450px;
  height: 304px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  /* 向左上移动自身的 50% */
  transform: translate(-50%, -50%);
}
.login-box .logo{
    width: 130px;
    height: 130px;
    border:7px solid #fff;
    border-radius: 50%;
    background-color: #eee;
    box-shadow: 0 0 10px #ccc;
    position: absolute;
    left: 50%;
    top: -50%;
    /* 向左上移动自身的 50% */
    transform: translate(-50%, 50%);
}
.login-box .el-form {
    width: 100%;
    padding: 0 20px 30px 20px;
    position: absolute;
    bottom: 0;
    /* 内边距向内压挤，不会影响最终宽 */
    box-sizing: border-box;
    text-align: right;
}
.login-box .el-input {
    margin-bottom: 20px;
}
</style>
