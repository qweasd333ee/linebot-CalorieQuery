export default {
  type: 'bubble',
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
                size: 'sm',
                flex: 2,
                align: 'center'
              },
              {
                type: 'text',
                text: '100',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 3,
                align: 'center'
              },
              {
                type: 'text',
                text: '大卡',
                size: 'sm',
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
