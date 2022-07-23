<template>
  <div class="wrapper">
    <div class="tabItem"
         @click="checkTab(index)"
         :class="{'active':checkIndex===index}"
         v-for="(item,index) in tabList"
         :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    checkIndex: {
      type: [String, Number]
    }

  },
  data () {
    return {
      tabList: ['样式', '数据'],
      checkIndex2: this.checkIndex
    }
  },
  methods: {
    checkTab (index) {
      this.checkIndex2 = index
      this.$emit('checkTabChange', this.checkIndex2)
      // console.log(index)
      // console.log(this.checkIndex)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
  }
  .tabItem {
    padding: 15px;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #ffc300;
  }
</style>
