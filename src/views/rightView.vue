<template>
  <div class="box">
    <div class="wrapper">
      <headTab :checkIndex="checkIndex"
               @checkTabChange="checkTabChange"></headTab>
      <div v-if="mycurrComp">
        <div v-if="checkIndex === 0">
          <div class="styleItem"
               v-for="(item, index) in mycurrComp.attribute"
               :key="index">
            <span class="label">{{ item.name }}:</span>
            <input class="inputStyl"
                   v-if="item.type === 'input'"
                   type="text"
                   v-model="item.value"
                   @blur="changeInput" />
            <input class="inputStyl"
                   v-if="item.type === 'color'"
                   type="color"
                   v-model="item.value"
                   @change="changeInput" />
          </div>
        </div>
        <div v-if="checkIndex === 1">
          <textarea class="dataBox"
                    @change="changeInput"
                    v-model="dataStr"></textarea>
        </div>
      </div>
      <div style="padding:15px;"
           v-else>当前没有正在编辑的组件</div>
    </div>
  </div>
</template>

<script>
import headTab from './comps/headTab.vue'
import getComponent from '../handlers'
export default {
  components: {
    headTab
  },
  props: {
    mycurrComp: {
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
    },
    changeInput () {
      const component = getComponent(this.mycurrComp.info, this.mycurrComp.attribute, this.dataStr)
      component.position = this.mycurrComp.position
      this.$emit('updateComp', component)
    }
  },
  watch: {
    mycurrComp (val) {
      if (val) {
        this.dataStr = JSON.stringify(val.data)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .box {
    border: 2px solid #ffc300;
    margin: 20px 5px;
    .wrapper {
      width: 350px;
      .styleItem {
        margin: 10px;
        display: flex;
        .label {
          display: inline-block;
          width: 80px;
        }
        .inputStyl {
          flex: 1 0;
        }
      }
      .dataBox {
        min-height: 300px;
        margin: 15px;
        width: 90%;
      }
    }
  }
</style>
