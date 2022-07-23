<template>
  <div class="left">
    <div class="comp1"
         draggable="true"
         @dragstart="dragstart($event,item)"
         v-for="item in compList"
         :key="item.type">{{item.name}}</div>
  </div>
</template>

<script>
import compList from '../components/compList.js'
export default {
  data () {
    return {
      compList
    }
  },
  methods: {
    dragstart (e, comp) {
      let info = {}
      info = comp
      info.x = e.offsetX
      info.y = e.offsetY
      e.dataTransfer.setData('info', JSON.stringify(info))
    }
  },
}
</script>

<style>
  .left {
    width: 200px;
    background-color: #ccc;
  }
  .comp1 {
    width: 100px;
    height: 50px;
    background-color: #fff;
    margin: 10px auto;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
</style>
