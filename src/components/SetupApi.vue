<template>
  <div class="content">
    <el-button @click="clear">重置</el-button>
    <el-input v-model="input" placeholder="请输入" class="search" />
    <el-button @click="search()">搜索</el-button>
    <div v-for="item in list" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import useSearch from "../composables/useSearch.js"
export default {
  data() {
    return {
    }
  },
  setup() {
    return useSearch()
  }
}
</script>

<style lang="less" scoped>
.content {
  color: #409eff;
}
.search {
  width: 200px;
}
</style>
