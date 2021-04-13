<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 3000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '450px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '成虫规模', max: 20000 },
            { name: '幼虫规模', max: 20000 },
            { name: '棚区虫口密度', max: 20000 },
            { name: '当前用药', max: 20000 },
            { name: '爆发概率', max: 20000 },
            { name: '作物单株虫口密度', max: 20000 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['粉虱', '蓟马', '综合']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [15000, 11000, 16000, 9000, 12000, 12000],
              name: '综合'
            },
            {
              value: [9000, 6400, 11000, 9000, 13000, 11000],
              name: '蓟马'
            },
            {
              value: [13000, 5000, 12000, 9000, 15000, 14000],
              name: '粉虱'
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
