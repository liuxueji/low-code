<template>
  <div class="box">
    <div class="wrapper">
      <RightTab :checkIndex="checkIndex"
                @checkTabChange="checkTabChange"></RightTab>
      <div v-if="activeCompData">
        <div v-if="checkIndex === 0">
          <div class="styleItem"
               v-for="(item, index) in activeCompData"
               :key="index">
            <span class="label"
                  v-if="item.name">{{ item.name }}:</span>
            <input class="inputStyle"
                   v-if="item.type === 'input'"
                   type="text"
                   v-model="item.value"
                   @blur="changeInput" />
            <input class="inputStyle"
                   v-if="item.type === 'color'"
                   type="color"
                   v-model="item.value"
                   @change="changeInput" />
          </div>
        </div>
        <div v-if="checkIndex === 1">
          <textarea class="dataBox"
                    @change="changeInput"
                    v-model="activeCompData.data"></textarea>
        </div>
      </div>
      <div style="padding:15px;"
           v-else>当前没有正在编辑的组件</div>
    </div>
  </div>
</template>

<script>
import RightTab from './RightTab.vue'
export default {
  components: {
    RightTab
  },
  props: {
    activeCompData: {
      type: Object
    }
  },
  data () {
    return {
      checkIndex: 0,
      dataStr: ''
    }
  },
  methods: {
    checkTabChange (index) {
      this.checkIndex = index
      // console.log(this.activeCompData)
    },
    changeInput () {
      // console.log(this.activeCompData)
      this.$emit('updateComp', this.activeCompData)
    }
  }
}
</script>

<style scoped>
  .box {
    margin: 20px 5px;
  }
  .wrapper {
    width: 350px;
  }
  .styleItem {
    margin: 10px;
    display: flex;
  }
  .dataBox {
    min-height: 300px;
    margin: 15px;
    width: 90%;
  }
  .label {
    display: inline-block;
    width: 80px;
  }
  .inputStyle {
    flex: 1 0;
  }
</style>
