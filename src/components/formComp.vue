<template>
  <div>
    <xj-button type="primary"
               @click="visible = true">按钮</xj-button>
    <xj-dialog title="提示"
               :visible.sync="visible"
               width="30%">
      <xj-form :model="model">
        <xj-form-item label="用户名">
          <xj-input placeholder="请输入用户名"
                    v-model="model.username"
                    clearable></xj-input>
        </xj-form-item>
        <xj-form-item label="密码">
          <xj-input placeholder="请输入密码"
                    type="password"
                    v-model="model.userpwd"
                    show-password></xj-input>
        </xj-form-item>
        <xj-form-item label="立即配送">
          <xj-switch v-model="model.soon"></xj-switch>
        </xj-form-item>
        <xj-form-item label="性别">
          <xj-radio-group v-model="model.gender">
            <xj-radio label="1">男</xj-radio>
            <xj-radio label="0">女</xj-radio>
          </xj-radio-group>
        </xj-form-item>
        <xj-form-item label="爱好">
          <xj-checkbox-group v-model="model.hobby">
            <xj-checkbox label="篮球">篮球</xj-checkbox>
            <xj-checkbox label="足球">足球</xj-checkbox>
            <xj-checkbox label="乒乓球">乒乓球</xj-checkbox>
          </xj-checkbox-group>
        </xj-form-item>
      </xj-form>
      <template v-slot:footer>
        <xj-button>取消</xj-button>
        <xj-button @click="btn"
                   type="primary">确定</xj-button>
      </template>
    </xj-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      model: {
        username: 'admin',
        userpwd: '123456',
        soon: true,
        gender: '1',
        hobby: ['篮球']
      },
      visible: false
    }
  }
}
</script>