import axios from 'axios'
import healthFood from '../templates/healthFood.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://data.fda.gov.tw/opendata/exportDataList.do?method=ExportData&InfoId=19&logType=5')
    const text = event.message.text.substring(4)
    const healthy = []
    for (let i = 0; i < data.length; i++) {
      const name = data[i].中文品名
      const number = data[i].許可證字號
      const effect = data[i].保健功效
      const precautions = data[i].注意事項
      const worning = data[i].警語
      const link = data[i].網址
      if (text === number) {
        const bubble = JSON.parse(JSON.stringify(healthFood))
        bubble.body.contents[0].text = name
        bubble.body.contents[1].contents[0].contents[1].text = number
        bubble.body.contents[1].contents[1].contents[1].text = effect
        bubble.body.contents[1].contents[2].contents[1].text = precautions
        bubble.body.contents[1].contents[3].contents[1].text = worning
        bubble.footer.contents[0].action.uri = link
        healthy.push(bubble)
      }
    }
    const reply3 = {
      type: 'flex',
      altText: '健康食品查詢結果',
      contents: {
        type: 'carousel',
        contents: healthy
      }
    }
    event.reply(reply3)
    writejson(reply3, 'healthy')
  } catch (error) {
    console.error(error)
  }
}
