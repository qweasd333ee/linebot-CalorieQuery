const age = 25
const cm = 180
const kg = 75
const gender = 0

const BMR = Math.round((9.99 * kg) + (6.25 * cm) - (4.92 * age) + ((166 * gender) - 161))
console.log(BMR)

const exercise1 = 1.2
const exercise2 = 1.375
const exercise3 = 1.55
const exercise4 = 1.72
const exercise5 = 1.9
const TDEE = Math.round(BMR * exercise3)
console.log(TDEE)

const rtrt = async (event) => {
  console.log(event)
}
rtrt()
