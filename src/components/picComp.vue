<template>
  <img :style="setStyle"
       :src="picUrl"
       alt="">
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    data: {
      type: String
    }
  },
  data () {
    return {
      dataString: JSON.parse(this.data).filename
    }
  },
  computed: {
    setStyle () {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    },
    picUrl () {
      return require('../assets/' + this.dataString)
    }
  }
}
</script>

<style>
</style>
