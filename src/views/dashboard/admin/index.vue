<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col :span="14">
        <div class="chart-wrapper">
        <Heatmap/>
        </div>
      </el-col>
      <el-col :span="10" >
        <div class="chart-wrapper">
          <span>虫群规模统计</span>
          <raddar-chart />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="14" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :span="10">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
<!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
<!--        <todo-list />-->
<!--      </el-col>-->
<!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
<!--        <box-card />-->
<!--      </el-col>-->
    </el-row>
<!--    <el-row :gutter="32">-->
<!--      <el-col :xs="24" :sm="24" :lg="8">-->
<!--        <div class="chart-wrapper">-->
<!--          <pie-chart />-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :xs="24" :sm="24" :lg="8">-->
<!--        <div class="chart-wrapper">-->
<!--          <bar-chart />-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import Heatmap from '@/views/dashboard/admin/components/Heatmap'

const lineChartData = {
  newVisitis: {
    expectedData: [188962, 198463, 209094, 221104, 208321, 217746, 205582],
    actualData: [198867, 208567, 209361, 215203, 212679, 223024, 199093]
  },
  messages: {
    expectedData: [122313, 112778, 120769, 149896, 152755, 159699, 140602],
    actualData: [130713, 109521, 110696, 132478, 137963, 163824, 152322]
  },
  purchases: {
    expectedData: [319595, 310061, 330363, 374960, 365970, 376595, 345782],
    actualData: [319580, 318098, 320057, 347682, 350642, 386848, 351415]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    Heatmap,
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
