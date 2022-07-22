<template>
  <div class="container"
       @dragover="dragover"
       @drop="onDrop"
       @click="checkComp">
    <div :id="item.id"
         class="newComp"
         v-for="item in list"
         :key="item.id"
         :style="{'left':item.x+'px','top':item.y+'px','width':item.width,'height':item.height}">
      <component :is="item.type"></component>
    </div>
    <div class="activeBorder"
         @mousedown="mousedown"
         :style="activeStyle"
         v-if="activeComp">
    </div>
  </div>
</template>

<script>
import imgComp from '../components/imgComp'
import textComp from '../components/textComp'
import btnComp from '../components/btnComp'
import inputComp from '../components/inputComp'
export default {
  data () {
    return {
      list: [],
      id: 0,
      activeStyle: {},
      activeComp: null
    }
  },
  components: {
    imgComp,
    textComp,
    btnComp,
    inputComp
  },
  methods: {
    dragover (e) {
      e.preventDefault()
    },
    onDrop (e) {
      e.preventDefault()
      const info = JSON.parse(e.dataTransfer.getData('info'))
      info.id = this.id++
      info.x = e.offsetX - info.x
      info.y = e.offsetY - info.y

      this.list.push(info)
    },
    mousedown (e) {
      // this.activeBorder.x = e.clientX
      // this.activeBorder.y = e.clientX
      // document.addEventListener('mousemove', this.mouseMove, true)
      // document.addEventListener('mouseup', this.mouseUp, true)
      console.log(e);

    },
    checkComp (e) {
      if (e.target.id) {
        this.activeComp = e.target
        this.activeStyle = e.target.style.cssText
      }
      if (e.target.parentNode.id) {
        this.activeComp = e.target.parentNode
        this.activeStyle = e.target.parentNode.style.cssText
        console.log(e.target.parentNode);
      }

    }
  },
}
</script>

<style>
  .container {
    flex: 1;
    background-color: #eee;
    position: relative;
  }
  .newComp {
    background-color: #fff;
    position: absolute;
  }
  .activeBorder {
    border: 1px solid red;
    position: absolute;
  }
</style>
