<template>
  <el-container direction="vertical">
      <el-header></el-header>
      <el-main>
          <el-col :span="24">
            <el-col :span="6">
              <el-input v-model="userId" placeholder="请输入账号">
                <template slot="prepend">账号</template>
              </el-input>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="6">
              <el-input v-model="passWord" placeholder="请输入密码" show-password>
                <template slot="prepend">密码</template>
              </el-input>
            </el-col>
          </el-col>
          <el-button @click="onSubmit">确认登录</el-button>
      </el-main>
      <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userId: '',
      passWord: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.$axios.get('http://172.16.103.47:3000/api/login').then((res) => {
        this.$store.commit('login', {isLogin: res.data.isLogin})
        this.$router.push({path: 'HelloWorld', params: {isLogin: 'true'}})
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el- {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
</style>
