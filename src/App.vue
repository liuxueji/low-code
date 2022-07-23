<template>
  <div id="app">
    <left />
    <center @myactiveComp="myactiveComp"
            :activeCompData='activeCompData' />
    <right @updateComp='updateComp'
           :activeCompData='activeCompData' />
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
import Right from './views/Right'
export default {
  name: "App",
  components: {
    Left,
    Center,
    Right
  },
  data () {
    return {
      // 生成的组件
      list: [],
      activeCompData: {}
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
      // console.log(this.list)
    },
    myactiveComp (data) {
      this.activeCompData = data
    },
    updateComp (data) {
      this.activeCompData = data
    }
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
