<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="消息" min-width="200">
      <template slot-scope="scope">
        {{scope.row.name}}
      </template>
    </el-table-column>
    <el-table-column label="日期" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.date}}
      </template>
    </el-table-column>
    <el-table-column label="级别" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        警告: 'warning',
        严重: 'danger',
        成功: 'success'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        console.log(response)
        this.list = response.data.transactions
      })
    }
  }
}
</script>
