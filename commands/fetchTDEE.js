import health from '../templates/TDEE.js'
import writejson from '../utils/writejson.js'

export default (event) => {
  const text = event.message.text.substring(4)
  const info = text.split(' ')
  const data = []
  const age = info[0]
  const cm = info[1]
  const kg = info[2]
  const gender = info[3]
  let exercise
  if (info[4] === 'A') {
    exercise = '1.2'
  } else if (info[4] === 'B') {
    exercise = '1.375'
  } else if (info[4] === 'C') {
    exercise = '1.55'
  } else if (info[4] === 'D') {
    exercise = '1.72'
  } else if (info[4] === 'E') {
    exercise = '1.9'
  }
  if (event.message.type === 'text') {
    const BMR = Math.round((9.99 * kg) + (6.25 * cm) - (4.92 * age) + ((166 * gender) - 161))
    const TDEE = Math.round(BMR * exercise)
    const bubble = JSON.parse(JSON.stringify(health))
    bubble.body.contents[1].contents[0].contents[1].text = `${BMR}`
    bubble.body.contents[3].contents[0].contents[1].text = `${TDEE}`
    data.push(bubble)
    console.log(bubble)
  } else {
    console.log('輸入格式錯誤，請確認後重新輸入。')
  }
  const reply1 = {
    type: 'flex',
    altText: 'BMR、TDEE查詢結果',
    contents: {
      type: 'carousel',
      contents: data
    }
  }
  event.reply(reply1)
  writejson(reply1, 'data')
}
