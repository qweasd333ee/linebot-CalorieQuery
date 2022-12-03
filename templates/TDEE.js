export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://raw.githubusercontent.com/qweasd333ee/linebot-demo/master/images/TDEE.jpeg',
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
        text: '基礎代謝率(BMR)',
        weight: 'bold',
        size: 'xl',
        align: 'center'
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
                text: '每日',
                flex: 1,
                size: 'md',
                color: '#aaaaaa',
                align: 'center'
              },
              {
                type: 'text',
                text: '1000',
                color: '#666666',
                size: 'lg',
                flex: 4,
                align: 'center'
              },
              {
                type: 'text',
                text: '大卡',
                color: '#666666',
                size: 'md',
                flex: 1
              }
            ]
          }
        ]
      },
      {
        type: 'text',
        text: '每日總熱量消耗(TDEE)',
        weight: 'bold',
        size: 'xl',
        align: 'center',
        margin: 'xxl'
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
                text: '每日',
                flex: 1,
                size: 'md',
                color: '#aaaaaa',
                align: 'center'
              },
              {
                type: 'text',
                text: '1000',
                color: '#666666',
                size: 'lg',
                flex: 4,
                align: 'center'
              },
              {
                type: 'text',
                text: '大卡',
                color: '#666666',
                size: 'md',
                flex: 1
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
    contents: [
      {
        type: 'button',
        action: {
          type: 'uri',
          label: '參考網站',
          uri: 'https://tools.heho.com.tw/bmr/'
        }
      }
    ]
  }
}
