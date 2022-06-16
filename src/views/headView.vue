<template>
  <div class="wrapper">
    <h1>可视化平台</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    mycurrComp: Object
  },
  methods: {
    saveBtn () {
      // console.log(this.mycurrComp)
    }
  }
}
</script>

<style scoped lang='less'>
  .wrapper {
    background-color: #ffc300;
    height: 80px;
    h1 {
      margin-left: 800px;
      line-height: 80px;
      color: #fff;
    }
  }
</style>
