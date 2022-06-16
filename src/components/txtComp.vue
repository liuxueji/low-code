<template>
  <div :style='setTxtStyle'>{{data}}</div>
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
    color: {
      type: [String]
    },
    fontSize: {
      type: [String, Number]
    },
    data: {
      type: String
    }
  },
  computed: {
    setTxtStyle () {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        color: this.color,
        fontSize: this.fontSize + 'px'
      }
    }
  }
}
</script>

<style>
</style>
