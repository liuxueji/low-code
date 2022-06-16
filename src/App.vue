<template>
  <div id="app">
    <head-view :mycurrComp='mycurrComp'></head-view>
    <div class="content-box">
      <left-view></left-view>
      <center-view @currComp='currComp'
                   :mycurrComp='mycurrComp'></center-view>
      <right-view @updateComp='updateComp'
                  :mycurrComp='mycurrComp'></right-view>
    </div>
  </div>
</template>

<script>
import centerView from './views/centerView'
import headView from './views/headView'
import leftView from './views/leftView'
import rightView from './views/rightView'
export default {
  name: 'App',
  data () {
    return {
      mycurrComp: null
    }
  },
  components: {
    centerView,
    headView,
    leftView,
    rightView
  },
  methods: {
    currComp (comp) {
      this.mycurrComp = comp
    },
    updateComp (comp) {
      this.mycurrComp = comp
    }
  }
}
</script>

<style lang='less'>
  .content-box {
    display: flex;
    height: calc(100vh - 80px);
  }
</style>
