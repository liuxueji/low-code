<template>
  <xj-radio-group v-model="model.gender">
    <xj-radio label="1">男</xj-radio>
    <xj-radio label="0">女</xj-radio>
  </xj-radio-group>
</template>

<script>
export default {
  data () {
    return {
      model: {
        gender: '1'
      }
    }
  },
}
</script>

<style>
</style>
