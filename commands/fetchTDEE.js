export default (event) => {
  const data = []
  const text = event.message.text
  const info = text.split(' ')
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
  if (event.message.type === 'text' && text !== '個人資料') {
    const BMR = Math.round((9.99 * kg) + (6.25 * cm) - (4.92 * age) + ((166 * gender) - 161))
    const TDEE = Math.round(BMR * exercise)
    data.push(age, cm, kg, gender, exercise)
    console.log(data)
    console.log(TDEE)
  } else if (text === '個人資料') {
    console.log(data)
  }
}
