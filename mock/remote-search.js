const Mock = require('mockjs')

const NameList = []
const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}
NameList.push({ name: 'mock-Pan' })

module.exports = [
  // username search
  {
    url: '/vue-element-admin/search/user',
    type: 'get',
    response: config => {
      const { name } = config.query
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase()
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
      })
      return {
        code: 20000,
        data: { items: mockNameList }
      }
    }
  },

  // transaction list
  {
    url: '/vue-element-admin/transaction/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: 5,
          transactions: [
            {
              'name': '当前虫口密度达到35，请及时降温或用药！',
              'date': '2021-03-06',
              'status': '严重'
            },
            {
              'name': '棚区-3，1-4区域虫口密度超过设定阈值，请前往处理！',
              'date': '2021-03-11',
              'status': '严重'
            },
            {
              'name': '棚区-1，6-2区域虫口密度超过设定阈值，请前往处理！',
              'date': '2021-03-17',
              'status': '严重'
            },
            {
              'name': '棚区-5，预测将在2021-04-07迎来蓟马虫害高峰，请前往处理！',
              'date': '2021-03-23',
              'status': '警告'
            },
            {
              'name': '当前检测周期即将完成，请前往更换虫板。',
              'date': '2021-03-29',
              'status': '警告'
            },
            {
              'name': '三月检测报表已生成。',
              'date': '2021-03-31',
              'status': '成功'
            }
          ]
        }
      }
    }
  }
]
