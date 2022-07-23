<template>
  <xj-word-cloud :list="arr.userList"></xj-word-cloud>
</template>
<script>
import Mock from 'mockjs'
export default {
  name: "XjWordCloudView",
  data () {
    return {
      arr: []
    };
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      // 模拟一个列表数据
      this.arr = Mock.mock({
        "userList|20-25": [  // 生成一个 length是 20-25 之间的数组
          {
            "name": "@cname", // @cname用来生成名字
            "num|0-10": 0, // 生成一个 0-10 之间的整数
          }
        ]
      })
      console.log(this.arr.userList);
    }
  },
}
</script>