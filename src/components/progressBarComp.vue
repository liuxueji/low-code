<template>
  <div class="progress">
    <h3>进度条</h3>
    <progress-bar width="40"
                  unfinishBg="#ccc"
                  sliderBg="red"
                  :percent="percent"
                  @progDrag="progDrag"
                  @progClick="progClick">1231231233</progress-bar>
    <div class="nav">
      <div>{{curSecond|formateTime}}</div>
      <div>{{percent|toInt}}%</div>
      <div>{{total|formateTime}}</div>
    </div>
    <div class="actionBtn">
      <xj-button type="button"
                 @click="backword">＜</xj-button>
      <xj-button type="button"
                 @click="action"
                 v-if="isShow">▶</xj-button>
      <xj-button type="button"
                 @click="action"
                 v-else>■</xj-button>
      <xj-button type="button"
                 @click="forward">＞</xj-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 总时长
      total: 800,
      // 当前观看时长
      curSecond: 0,
      percent: 0,
      timer: null,
      isShow: true
    }
  },
  methods: {
    // 通过获取回来的观看进度（百分比），反推当前时长
    progDrag (percent) {
      this.curSecond = percent / 100 * this.total
      console.log(percent)
    },
    progClick (percent) {
      this.curSecond = percent / 100 * this.total
      console.log(this.curSecond)
    },
    action () {
      this.isShow = !this.isShow
      if (!this.isShow) {
        this.timer = window.setInterval(() => {
          this.curSecond++
          // 当前时长等于总时长，播放完毕
          if (this.curSecond === this.total) clearInterval(this.timer)
        }, 1000)
      } else {
        clearInterval(this.timer)
      }
    },
    // 后退
    backword () {
      this.curSecond -= 10
    },
    // 前进
    forward () {
      this.curSecond += 10
    }
  },
  mounted () {
    this.percent = this.curSecond / this.total * 100
  },
  // 通过监听最新curSecond（当前观看时长），并通过 当前时长/总时长 * 100 得到当前观看进度（百分比）
  watch: {
    curSecond (nowValue) {
      this.percent = nowValue / this.total * 100
    }
  },
  // 过滤小数点
  filters: {
    toInt (value) {
      // 截取当前数据到小数点后两位
      const realVal = Number(value).toFixed(0)
      // num.toFixed(2)获取的是字符串
      return Number(realVal)
    },
    formateTime (time) {
      const h = parseInt(time / 3600)
      const minute = parseInt(time / 60 % 60)
      const second = Math.ceil(time % 60)
      const hours = h < 10 ? '0' + h : h
      const formatSecond = second > 59 ? 59 : second
      return `${hours > 0 ? `${hours}:` : ''}${minute < 10 ? '0' + minute : minute}:${formatSecond < 10 ? '0' + formatSecond : formatSecond}`
    }
  }
}
</script>

<style>
  .progress {
    width: 400px;
  }
  .nav {
    width: 400px;
    height: 50px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .actionBtn {
    width: 400px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>