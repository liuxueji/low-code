<template>
  <div class="wrapper">
    <div class="menuItem"
         @dragstart='dragStart'
         draggable='true'
         :data-name='item.name'
         :data-type='item.type'
         v-for="(item,index) in menus"
         :key='index'>{{item.name}}</div>
  </div>
</template>

<script>
// 导入组件菜单
import menus from './menuList.js'
export default {
  data () {
    return {
      menus
    }
  },
  methods: {
    dragStart (e) {
      const info = {
        id: 0,
        name: e.target.getAttribute('data-name'),
        type: e.target.getAttribute('data-type')
      }
      e.dataTransfer.setData('info', JSON.stringify(info))
    }
  }
}
</script>

<style scoped lang='less'>
  .wrapper {
    flex: 2;
    background: #fff;
    margin: 20px 5px;
    border: 2px solid #ffc300;
    .menuItem {
      background-color: #fff;
      color: #ffc300;
      border: 1px solid #ffc300;
      width: 100px;
      height: 100px;
      float: left;
      margin: 22px;
      text-align: center;
      line-height: 100px;
      cursor: pointer;
    }
  }
</style>
