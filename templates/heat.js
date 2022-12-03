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
        text: '雞肉',
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
                text: '每100克',
                color: '#aaaaaa',
                size: 'md',
                flex: 2,
                align: 'center'
              },
              {
                type: 'text',
                text: '100',
                wrap: true,
                color: '#666666',
                size: 'lg',
                flex: 3,
                align: 'center'
              },
              {
                type: 'text',
                text: '大卡',
                size: 'md',
                flex: 2,
                align: 'center',
                color: '#aaaaaa'
              }
            ]
          }
        ]
      }
    ]
  }
}
