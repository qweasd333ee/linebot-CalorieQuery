// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import express from 'express'
import fetchFood from './commands/fetchFood.js'
import fetchTDEE from './commands/fetchTDEE.js'
import fetchDietarySupplement from './commands/fetchDietarySupplement.js'

const app = express()
// 設定 linebot
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.text.slice(0, 4) === '查熱量 ') {
    fetchFood(event)
  } else if (event.message.text.slice(0, 4) === '查消耗 ') {
    fetchTDEE(event)
  } else if (event.message.text.slice(0, 4) === '查字號 ') {
    fetchDietarySupplement(event)
  } else if (event.message.text.slice(0, 4) === '使用說明') {
    event.reply('您好，在此為您介紹本機器人之使用方法。1.查消耗可查詢個人基礎代謝率(BMR)以及每日總熱量消耗(TDEE)，範例：查消耗 25 180 75 1 C，數字分別為查消耗 年齡 身高(cm) 體重(Kg) 性別(男:1/女:0) 運動習慣(A:幾乎不運動/B:每週運動 1-3 天/C:每週運動 3-5 天/D:每週運動 6-7 天/E:長時間運動或體力勞動工作)。2.查熱量可查詢食品之熱量(100g/大卡)，範例：查熱量 桑葚果醬，如未回應，請確認是否有錯別字。3.本功能為查詢健康食品認證字號，範例：查字號 衛部健食字第A00235號，可預防認證偽造，也可查詢該食品之注意事項等等。')
  }
})

const linebotParser = bot.parser()

app.post('/', linebotParser)

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

// linebot 偵測指定 port 的指定路徑請求
app.listen(process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
