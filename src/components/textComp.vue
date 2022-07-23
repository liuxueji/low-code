<template>
  <div>{{compData}}</div>
</template>

<script>
import list from './compList.js'
export default {
  data () {
    return {
      compData: ''
    }
  },
  props: {
    activeCompData: {
      type: Object
    }
  },
  created () {
    list.forEach(item => {
      if (item.name == '文本组件') {
        this.compData = item.data
      }
    })
  },
  watch: {
    activeCompData () {
      this.compData = this.activeCompData.data
    },
    deep: true
  }
}
</script>

<style>
</style>
