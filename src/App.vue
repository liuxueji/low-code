<template>
  <div id="app">
    <left />
    <center />
  </div>
</template>

<script>
let id = 0
let compOffsetX
let compOffsetY
let compName
let compType
let compWidth
let compHeight

import Left from './views/Left'
import Center from './views/Center'
export default {
  name: "App",
  components: {
    Left,
    Center,
  },
  data () {
    return {
      // 生成的组件
      list: []
    }
  },
  methods: {
    dragover (e) {
      e.preventDefault()
    },
    onDrop (e) {
      e.preventDefault()
      this.list.push(
        {
          id: id++,
          x: e.offsetX - compOffsetX,
          y: e.offsetY - compOffsetY,
          name: compName,
          type: compType,
          width: compWidth,
          height: compHeight
        })

      console.log(this.list)
    },
  },
};
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
</style>
