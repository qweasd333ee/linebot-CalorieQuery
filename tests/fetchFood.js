import axios from 'axios'
import JSZip from 'jszip'

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

const main = async (event) => {
  console.log(event)
  try {
    const response = await axios.get('https://data.fda.gov.tw/opendata/exportDataList.do?method=ExportData&InfoId=20&logType=5', {
      responseType: 'stream'
    })
    const json = await readJSONfromZip(response.data)
    const heat = []
    for (let i = 0; i < json.length; i++) {
      const foodName = json[i]['樣品名稱']
      const analyze = json[i]['分析項']
      const Kcal = json[i]['每100克含量']
      if (foodName === '葵花籽油' && analyze === '修正熱量') {
        heat.push(`每100克 ${Kcal} 大卡`)
      }
    }
    // console.log(heat)
  } catch (error) {
    // console.error(error)
  }
}

main()
