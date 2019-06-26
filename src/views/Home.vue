<template>
    <el-container class="home">
      <el-header>
        <!-- 左侧 -->
        <div class="logo-box">
          <img width="50px" src="../assets/logo.png" alt="">
          <span>电商后台管理系统</span>
        </div>
        <!-- 右侧 -->
        <el-button @click="logout">退出</el-button>
        </el-header>
      <el-container>
        <!-- 左侧侧边栏 -->
      <el-aside width="200px">
        <el-menu
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#399bfb"
        >
  <el-submenu v-for="(item, index) in menuList" :key="index" :index="item.path">
    <!-- 插槽  一级按钮-->
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{item.authName}}</span>
    </template>
    <!-- 二级按钮 -->
    <el-menu-item v-for="(item1, index1) in item.children" :key="index1" :index="item1.path">
      {{item1.authName}}
    </el-menu-item>
  </el-submenu>
</el-menu>
          </el-aside>
          <!-- 右侧主体 -->
        <el-main>
          <!-- 子组件容器 -->
          <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
</template>
<script>
export default {
  data () {
    return {
      menuList: []
    }
  },
  async created () {
    const menus = await this.axios.get('/menus', {
      headers: { Authorization: sessionStorage.getItem('token') }
    })
    if (menus.data.meta.status !== 200) return this.$message.error('获取菜单列表失败')
    this.menuList = menus.data.data
    // console.log(menus)
  },
  methods: {
    logout () {
      sessionStorage.removeItem('token')
      this.$router.push('login')
    }
  }
}
</script>
<style>
.home .el-header {
  background-color: #373d41;
  /* flex 布局 */
  display: flex;
  /* 一左 一右 */
  justify-content: space-between;
  /* 垂直居中 */
  align-items: center;
  /* 内容无法选中 */
  user-select: none;
}
.home .el-header img {
  /* 图片和文字垂直中线对齐 */
  vertical-align: middle;
}
.el-container {
  height: 100%;
}
.home .el-aside {
  background-color: #333743;
  height: 100%;
}
.home .el-header .logo-box span{
  color:aliceblue
}
</style>
