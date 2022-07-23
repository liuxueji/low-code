<template>
  <xj-checkbox-group v-model="model.hobby">
    <xj-checkbox label="篮球">篮球</xj-checkbox>
    <xj-checkbox label="足球">足球</xj-checkbox>
    <xj-checkbox label="乒乓球">乒乓球</xj-checkbox>
  </xj-checkbox-group>
</template>

<script>
export default {
  data () {
    return {
      model: {
        hobby: ['篮球']
      }
    }
  },
}
</script>

<style>
</style>
