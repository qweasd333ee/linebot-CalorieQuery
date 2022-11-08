// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import fetchFood from './commands/fetchFood.js'

// 設定 linebot
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    fetchFood(event)
  }
})

// linebot 偵測指定 port 的指定路徑請求
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
