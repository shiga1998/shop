import Mock from 'mockjs'

Mock.mock('/mock', /get/, {
  'images|7': [{
    image: '@image("375x210", "#a8a8a8", "#ffffff")'
  }],
  'word|24': [{
    text: '@cword(4)'
  }],
  'list|26': [{
    image: '@image("150x150", "#d3e4r5", "#ffffff")',
    name: '@cword(4,5)',
    price: '@integer(100,999)'
  }],
  'menu|14': [{
    name: '@cword(3,4)'
  }],
  'classificationanner': [{
    image: '@image(265x100, "#a8a8a8", "#ffffff")'
  }],
  'classificationList|1-28': [{
    image: '@image(75x55, "#a8a8a8", "#ffffff")',
    name: '@word(2,6)'
  }],
  'detailsBanner|2-10': [{
    image: '@image(375x375, "#a8a8a8", "#ffffff")'
  }],
  'detailsImage|1-5': [{
    image: '@image(375x445, "#a8a8a8", "#ffffff")'
  }]
})
