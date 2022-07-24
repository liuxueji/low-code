<template>
  <div>
    <xj-slide @getMsg="getMsg"
              :limit='100'
              :width='300'
              :height='50'
              :fontSize='20'></xj-slide>
    <div>状态码:{{msg}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getMsg (data) {
      this.msg = data.msg
    }
  },
}
</script>

<style>
</style>
