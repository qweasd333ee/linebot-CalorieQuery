import axios from 'axios'

const main = async () => {
  try {
    const { data } = await axios.get('https://data.fda.gov.tw/opendata/exportDataList.do?method=ExportData&InfoId=19&logType=5')
    // const text = event.message.text.substring(6)
    for (let i = 0; i < data.length; i++) {
      const number = data[i].許可證字號
      const name = data[i].中文品名
      const link = data[i].網址
      const precautions = data[i].注意事項
      const effect = data[i].保健功效宣稱
      const worning = data[i].警語
      console.log(number)
      console.log(name)
      console.log(link)
      console.log(precautions)
      console.log(effect)
      console.log(worning)
    }
  } catch (error) {
    console.error(error)
  }
}
main()
