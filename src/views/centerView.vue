<template>
  <div id="canvasBox"
       class="wrapper"
       @dragover="dragover"
       @drop='drop'
       @click="checkComp">
    <div :id='item.info.id'
         v-for="(item,index) in components"
         :key="index"></div>
    <div id="borderBox"
         class='borderStyle'
         @mousedown="mouseDownStar"
         :style="setBorderStyle"
         @contextmenu.prevent="rightClick"
         v-if='currComp'></div>
  </div>
</template>

<script>
import getComponent from '../handlers/index.js'
import { genId, mountedComponent } from '../utils'
export default {
  props: {
    mycurrComp: { type: Object }
  },
  data () {
    return {
      components: [],
      zIndex: 1,
      currComp: null,
      startPosition: {
        x: 0,
        y: 0
      },
      component: {}
    }
  },
  methods: {
    dragover (e) {
      e.preventDefault()
    },
    drop (e) {
      e.preventDefault()
      const info = JSON.parse(e.dataTransfer.getData('info'))
      info.id = genId()
      const component = getComponent(info)
      let compWidth = 0
      let compHeight = 0
      component.attribute.forEach(item => {
        if (item.key === 'width') { compWidth = item.value }
        if (item.key === 'height') { compHeight = item.value }
      })
      let left = e.offsetX - compWidth / 2
      let top = e.offsetY - compHeight / 2
      if (left < 0) left = 0
      if (top < 0) top = 0
      const zIndex = this.zIndex++
      component.position = { offsetLeft: left, offsetTop: top, zIndex: zIndex }
      this.components.push(component)
      // console.log(this.components)
      this.component = component
      this.mountedComp()
      console.log('触发鼠标松开回调，此时组件挂载，挂载的组件为：')
      console.log(component)
    },
    checkComp (e) {
      const reg = /\w{8}-\w{4}/
      let node = e.target

      console.log('node:')
      console.log(node.parentNode)
      let count = 0
      while (node && !reg.test(node.id)) {
        count++
        if (count > 10) return
        node = node.parentNode
      }
      if (node && node.id) {
        this.currComp = this.components.find(item => {
          if (item.info.id === node.id) {
            return item
          }
        })
      } else {
        this.currComp = null
      }
      this.$emit('currComp', this.currComp)
    },
    mouseDownStar (e) {
      this.startPosition.x = e.clientX
      this.startPosition.y = e.clientY
      document.addEventListener('mousemove', this.mouseMove, true)
      document.addEventListener('mouseup', this.mouseUp, true)
    },
    mouseMove (e) {
      const offsetX = e.clientX - this.startPosition.x
      const offsetY = e.clientY - this.startPosition.y
      const com = document.getElementById(this.currComp.info.id)
      Object.assign(com.style, {
        left: this.boundaryLimit('x', this.currComp.position.offsetLeft + offsetX, this.currComp) + 'px',
        top: this.boundaryLimit('y', this.currComp.position.offsetTop + offsetY, this.currComp) + 'px'
      })
      const borderComp = document.getElementById('borderBox')
      Object.assign(borderComp.style, {
        left: this.boundaryLimit('x', this.currComp.position.offsetLeft + offsetX, this.currComp) + 'px',
        top: this.boundaryLimit('y', this.currComp.position.offsetTop + offsetY, this.currComp) + 'px'
      })
    },
    mouseUp (e) {
      document.removeEventListener('mousemove', this.mouseMove, true)
      document.removeEventListener('mouseup', this.mouseUp, true)
      this.currComp.position.offsetLeft = this.boundaryLimit('x', this.currComp.position.offsetLeft + (e.clientX - this.startPosition.x), this.currComp)
      this.currComp.position.offsetTop = this.boundaryLimit('y', this.currComp.position.offsetTop + (e.clientY - this.startPosition.y), this.currComp)
    },
    boundaryLimit (type, num, comp) {
      const canvas = document.getElementById('canvasBox')
      const canvasWidth = canvas.clientWidth
      const canvasHeight = canvas.clientHeight

      let compWidth = 0
      let compHeight = 0
      comp.attribute.forEach((item) => {
        if (item.key === 'width') {
          compWidth = item.value
        }
        if (item.key === 'height') {
          compHeight = item.value
        }
      })

      const maxX = canvasWidth - compWidth
      const maxY = canvasHeight - compHeight

      let lastNum = 0
      if (type === 'x') {
        if (num < 0) {
          lastNum = 0
        } else if (num > maxX) {
          lastNum = maxX
        } else {
          lastNum = num
        }
      } else if (type === 'y') {
        if (num < 0) {
          lastNum = 0
        } else if (num > maxY) {
          lastNum = maxY
        } else {
          lastNum = num
        }
      }
      return lastNum
    },
    mountedComp () {
      mountedComponent(this.component)
    },
    updateComps (val) {
      this.components.forEach(item => {
        if (item.info.id === val.info.id) {
          item.attribute = val.attribute
          item.data = val.data
          item.template = val.template
        }
      })
    },
    rightClick () {
      if (confirm('你确定删除？')) {
        document.getElementById(this.currComp.info.id).remove()
      }
      this.currComp = null
    }
  },
  computed: {
    setBorderStyle () {
      let compWidth = 0
      let compHeight = 0
      if (this.currComp) {
        this.currComp.attribute.forEach(item => {
          if (item.key === 'width') {
            compWidth = item.value
          }
          if (item.key === 'height') {
            compHeight = item.value
          }
        })
        return {
          width: `${compWidth}px`,
          height: `${compHeight}px`,
          left: `${this.currComp.position.offsetLeft}px`,
          top: `${this.currComp.position.offsetTop}px`,
          zIndex: `${this.currComp.position.zIndex}`
        }
      } else {
        return {}
      }
    }
  },
  watch: {
    mycurrComp (val) {
      if (val) {
        this.component = val
        mountedComponent(val)
        this.updateComps(val)
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .wrapper {
    margin: 20px 10px;
    border: 2px solid #ffc300;
    flex: 8;
    position: relative;
  }
  .borderStyle {
    border: 1px solid #ffc300;
    position: absolute;
  }
</style>
