import Vue from 'vue'
const getAttriStr = (attrs) => {
  let attrStr = ''
  attrs.forEach(item => {
    attrStr += item.key + '=' + item.value + ' '
  })
  return attrStr
}

export const genId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }
  return s4() + s4() + '-' + s4()
}

export const mountedComponent = (component) => {
  const data = {}
  const id = component.info.id
  let compWidth = 0
  let compHeight = 0
  if (component.attribute) {
    component.attribute.forEach(item => {
      data[item.key] = item.value
      if (item.key === 'width') {
        compWidth = item.value
      }
      if (item.key === 'height') {
        compHeight = item.value
      }
    })
  }
  // 提问：这里为什么需要定时器呢？
  // 因为这里的vue实例对象是通过id挂载的，所以前提是需要有id。如果不延迟，就会导致先挂载，然后再有id对应标签，这时就会挂载失败。
  setTimeout(() => {
    /* eslint-disable no-new */
    new Vue({ // 通过Vue函数new一个匿名对象，生成一个vue实例
      name: id.toString(),
      data() {
        return data
      },
      template: component.template,
      el: document.getElementById(id),
      mounted() {
        this.$el.id = id
        this.$el.style.position = 'absolute'
        this.$el.style.cursor = 'pointer'
        this.$el.style.left = `${component.position.offsetLeft}px`
        this.$el.style.top = `${component.position.offsetTop}px`
        this.$el.style.zIndex = `${component.position.zIndex}`
        this.$el.style.width = `${compWidth}px`
        this.$el.style.height = `${compHeight}px`
      }
    })
  }, 0)
}

export default getAttriStr
