import Mock from 'mockjs'

Mock.mock('/list', /get/, {
  'shoplist|1-5': [{
    'id|+1': 1,
    'name': '@cname(2,4)',
    'price': '@integer(100,999)'
  }]
})
