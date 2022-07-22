<template>
  <xj-input placeholder="请输入用户名"
            v-model="model.username"
            clearable></xj-input>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: 'admin'
      }
    }
  },
}
</script>

<style>
</style>
