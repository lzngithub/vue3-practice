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
const originList = [
  {
    id: 1,
    name: "坤坤",
  },
  {
    id: 2,
    name: "小宝",
  },
  {
    id: 3,
    name: "大叔",
  },
];
export default {
  data() {
    return {
      input: "",
      list: originList,
    };
  },
  watch: {
    input(value) {
      console.log(value);
    },
  },
  methods: {
    search() {
      console.log(this.input, typeof this.input);
      if (this.input === "") {
        return (this.list = originList);
      }
      this.list = originList.filter((item) => item.name === this.input);
    },
    clear() {
      this.input = "";
      this.search();
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  color: #409eff;
}
.search {
  width: 200px;
}
</style>
>
