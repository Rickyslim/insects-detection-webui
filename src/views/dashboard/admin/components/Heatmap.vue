<template>
  <div id="heatmap" style="width:100%; height: 466px;">
    <img src="../../../../assets/images/farm.jpg" style="width:100%; height: 100%">
  </div>
</template>

<script>
import Heatmap from 'heatmap.js'
export default {
  name: 'Heatmap',
  mounted() {
    // 创建一个heatmap实例对象
    // 这里直接指定热点图渲染的div了.heatmap支持自定义的样式方案,网页外包接活具体可看官网apiheatmapInstance.repaint()
    var heatmapInstance = Heatmap.create({
      container: document.querySelector('#heatmap')
    })
    // 构建一些随机数据点,网页切图价格这里替换成你的业务数据
    var points = []
    var max = 0
    var width = document.getElementById('heatmap').clientWidth * 0.7
    var height = document.getElementById('heatmap').clientHeight * 0.8
    var len = 100
    while (len--) {
      var val = Math.floor(Math.random() * 100)
      max = Math.max(max, val)
      var point = {
        x: Math.floor(Math.random() * width) + 150,
        y: Math.floor(Math.random() * height) + 50,
        value: val
      }
      if (point.x > 150 && point.x < 400 || point.x > 600 && point.x < 900) {
        if (point.y > 30 && point.y < 120 || point.y > 200 && point.y < 260 || point.y > 350 && point.y < 400) {
          points.push(point)
        }
      }
    }
    var data = {
      max: max,
      data: points
    }
    // 因为data是一组数据,web切图报价所以直接setData
    heatmapInstance.setData(data)
  },
  methods: {
    repaint_heatmap() {
      var heatmapInstance = Heatmap.create({
        container: document.querySelector('#heatmap')
      })
      // 构建一些随机数据点,网页切图价格这里替换成你的业务数据
      var points = []
      var max = 0
      var width = document.getElementById('heatmap').clientWidth * 0.7
      var height = document.getElementById('heatmap').clientHeight * 0.8
      var len = 100
      while (len--) {
        var val = Math.floor(Math.random() * 100)
        max = Math.max(max, val)
        var point = {
          x: Math.floor(Math.random() * width) + 150,
          y: Math.floor(Math.random() * height) + 50,
          value: val
        }
        if (point.x > 150 && point.x < 400 || point.x > 600 && point.x < 900) {
          if (point.y > 30 && point.y < 120 || point.y > 200 && point.y < 260 || point.y > 350 && point.y < 400) {
            points.push(point)
          }
        }
      }
      var data = {
        max: max,
        data: points
      }
      // 因为data是一组数据,web切图报价所以直接setData
      heatmapInstance.setData(data)
    }
  }
}

</script>

<style lang="scss" scoped>
.heatmap{
  height: 400px;
  width:700px;
}
</style>
