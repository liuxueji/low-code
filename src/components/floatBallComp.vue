<template>
  <div class="container">
    <xj-float-ball :x=0
                   :y=0.5
                   :isShow="true"
                   @click="click"
                   @rightClick="rightClick">
      <img width="50px"
           height="50px"
           src="../assets/floatBall.png" />
    </xj-float-ball>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    click (data) {
      console.log('左键点击', data);
    },
    rightClick (data) {
      console.log('右键点击', data);
    }
  },
};
</script>
<style scoped>
  .container {
    width: 500px;
    height: 800px;
    border: 1px solid #ffc300;
  }
</style>