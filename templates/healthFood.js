export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://raw.githubusercontent.com/qweasd333ee/linebot-demo/master/images/food.jpg',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '桂格100%喝的燕麥(顆粒微甜口味)',
        weight: 'bold',
        size: 'lg',
        wrap: true
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '許可證字號',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '衛部健食字第A00235號',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '保健功效',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '調節血脂功能',
                wrap: true,
                color: '#666666',
                size: 'md',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '注意事項',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '每日請勿飲用超過700毫升，以免引起脹氣。請洽詢醫師或營養師有關食用本產品之意見；均衡的飲食及適當的運動為身體健康之基礎。健康食品不具治療、矯正人類疾病之醫療效能。',
                wrap: true,
                color: '#666666',
                size: 'md',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '警語',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '攝取本產品應取代等量之日常穀類飲食(375毫升約等於0.6碗白飯)，請依建議攝取量食用，多食無益。',
                wrap: true,
                color: '#666666',
                size: 'md',
                flex: 5
              }
            ]
          }
        ]
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '完整資料',
          uri: 'https://linecorp.com'
        }
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm'
      }
    ],
    flex: 0
  },
  size: 'giga'
}
