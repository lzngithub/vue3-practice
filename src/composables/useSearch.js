import { ref } from "vue";
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

export default function useSearch() {
  const input = ref("");
  const list = ref(originList);
  const search = () => {
    console.log(input.value, typeof input.value);
    if (input.value === "") {
      list.value = originList;
    } else {
      list.value = originList.filter((item) => item.name === input.value);
    }
  };
  const clear = () => {
    input.value = "";
    search();
  };
  return {
    input,
    list,
    search,
    clear,
  };
}
