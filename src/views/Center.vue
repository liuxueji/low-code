<template>
  <div class="container"
       ref="con"
       @dragover="dragover"
       @drop="onDrop"
       @click="checkComp">
    <div :id="item.id"
         class="newComp"
         v-for="item in list"
         :key="item.id"
         :style="{'left':item.x+'px','top':item.y+'px','width':item.width.value,'height':item.height.value}">
      <component class="comp"
                 :is="item.type"
                 :activeCompData='activeCompData'></component>
    </div>
    <div class="activeBorder"
         @mousedown="mousedown"
         @mousemove="mousemove"
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
import switchComp from '../components/switchComp'
import radioComp from '../components/radioComp'
import checkboxComp from '../components/checkboxComp'
import dialogComp from '../components/dialogComp'
import formComp from '../components/formComp'
import progressBarComp from '../components/progressBarComp'
import wordCloudComp from '../components/wordCloudComp'
import floatBallComp from '../components/floatBallComp'
import slideComp from '../components/slideComp'

export default {
  data () {
    return {
      list: [],
      id: 0,
      activeStyle: {},
      activeComp: null,
      startPositionX: 0,
      startPositionY: 0
    }
  },
  components: {
    imgComp,
    textComp,
    btnComp,
    inputComp,
    switchComp,
    radioComp,
    checkboxComp,
    dialogComp,
    formComp,
    progressBarComp,
    wordCloudComp,
    floatBallComp,
    slideComp
  },
  props: {
    activeCompData: {
      type: Object
    }
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
      // 相对于窗口的位置
      this.startPositionX = e.clientX
      this.startPositionY = e.clientY
      // document.addEventListener('mousemove', this.mouseMove, true)
      // document.addEventListener('mouseup', this.mouseUp, true)
    },
    checkComp (e) {
      let node = e.target
      if (node.id) {
        // 获取选中的节点
        this.activeComp = node
        // 获取选中节点的样式
        this.activeStyle = node.style.cssText
      } else {
        let count = 0
        // 如果当前节点的id不存在，就找当前节点的父节点的id，依次循环，直到找到为止
        while (!node.id) {
          node = node.parentNode
          count++
          if (count > 10) return this.activeComp = null
        }
        // 获取选中的节点
        this.activeComp = node
        // 获取选中节点的样式
        this.activeStyle = node.style.cssText
      }
      let myactiveComp
      this.list.forEach(item => {
        if (item.id == this.activeComp.id)
          myactiveComp = item
      });
      // console.log(myactiveComp)
      // 将激活的组件派发到右侧编辑区
      this.$emit('myactiveComp', myactiveComp)
      // console.log(this.activeComp.getBoundingClientRect().left)
    },
    mousemove (e) {
      if (e.which == 1) {
        // 获取偏移量，通过当前位置-初始位置
        const offsetX = e.clientX - this.startPositionX;
        const offsetY = e.clientY - this.startPositionY;
        const com = document.getElementById(this.activeComp.id)
        //元素移动后的位置，通过元素初始位置 + 偏移量 ,通过assign拷贝到组件的style中
        Object.assign(com.style, {
          left: com.offsetLeft + offsetX + 'px',
          top: com.offsetTop + offsetY + 'px'
        })
        // 顺便拷贝一份给选中框
        const border = document.querySelector(".activeBorder")
        Object.assign(border.style, {
          left: com.offsetLeft + offsetX + 'px',
          top: com.offsetTop + offsetY + 'px'
        })
        // 将当前位置设置为下一次的初始位置
        this.startPositionX = e.clientX;
        this.startPositionY = e.clientY;
        // console.log(com.offsetLeft)
      }
    }
  },
}
</script>

<style scoped>
  .container {
    flex: 1;
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
  .comp {
  }
</style>
