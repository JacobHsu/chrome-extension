<template>
  <div class="main_app">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>卡片名称</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="primary"
        >操作按钮</el-button>
        
      </div>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <h1>Hello popup</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.box-card {
  width: 300px;
}
</style>
