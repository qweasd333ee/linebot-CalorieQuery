import axios from 'axios'
import JSZip from 'jszip'
import heat from '../templates/heat.js'
import writejson from '../utils/writejson.js'

const readJSONfromZip = (stream) => {
  return new Promise((resolve, reject) => {
    const data = []
    stream.on('data', (chunk) => {
      data.push(chunk)
    })
    stream.on('end', async () => {
      try {
        const buf = Buffer.concat(data)
        const zip = await JSZip.loadAsync(buf)
        const text = await zip.file('20_5.json').async('string')
        resolve(JSON.parse(text))
      } catch (error) {
        reject(new Error('readJSONfromZip Error'))
      }
    })
  })
}
export default async (event) => {
  try {
    const response = await axios.get('https://data.fda.gov.tw/opendata/exportDataList.do?method=ExportData&InfoId=20&logType=5', {
      responseType: 'stream'
    })
    const json = await readJSONfromZip(response.data)
    const text = event.message.text.substring(4)
    const heats = []
    for (let i = 0; i < json.length; i++) {
      const foodName = json[i]['樣品名稱']
      const analyze = json[i]['分析項']
      const Kcal = json[i]['每100克含量']
      if (analyze === '修正熱量') {
        if (text === foodName) {
          // console.log(json[i]['樣品名稱'])
          const bubble = JSON.parse(JSON.stringify(heat))
          // 修改名稱
          bubble.body.contents[0].text = foodName
          // 修改熱量數值
          bubble.body.contents[1].contents[0].contents[1].text = Kcal
          // 傳入陣列
          heats.push(bubble)
        }
      }
    }
    const reply2 = {
      type: 'flex',
      altText: '食品熱量查詢結果',
      contents: {
        type: 'carousel',
        contents: heats
      }
    }
    event.reply(reply2)
    writejson(reply2, 'heats')
  } catch (error) {
    event.reply('發生錯誤')
  }
}
