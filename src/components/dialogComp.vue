<template>
  <xj-dialog title="提示"
             :visible.sync="visible"
             width="30%">
    <template v-slot:footer>
      <xj-button @click="visible = false">取消</xj-button>
      <xj-button @click="visible = false"
                 type="primary">确定</xj-button>
    </template>
  </xj-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
}
</script>

<style>
</style>
