//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Phung'
console.log(typeof firstName)
let lastName = 'Nam'
console.log(typeof lastName)
let country = 'VietNam'
console.log(typeof country)
let city = 'HaLong'
console.log(typeof city)
let age = 20
console.log(typeof age)
let isMarried = false
console.log(typeof isMarried)
let year = 2023
console.log(typeof year)

//2. Check if type of '10' is equal to 10
console.log('10' == 10)
console.log('10' === 10)

//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)
console.log(parseInt('9.8') === 10)

//4. Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(true)
console.log(1)
console.log('hello js')

//   Write three JavaScript statement which provide falsy value.
console.log(false)
console.log(0)
console.log('')

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3: true
// 4 >= 3:true
// 4 < 3: false
// 4 <= 3: false
// 4 == 4:true
// 4 === 4:true
// 4 != 4:false
// 4 !== 4:false
// 4 != '4':false
// 4 == '4':true
// 4 === '4': false
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
// Find the length of python and jargon and make a falsy comparison statement.
let lang = 'python'
let notLang = 'jargon'
console.log(lang.length)
console.log(notLang.length)
console.log(lang.length !== notLang.length)
//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//. 4 > 3 && 10 < 12: true
// 4 > 3 && 10 > 12: false
// 4 > 3 || 10 < 12: true
// 4 > 3 || 10 > 12: true
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
// !(4 > 3): false
// !(4 < 3):true
// !(false): true
// !(4 > 3 && 10 < 12):false
// !(4 > 3 && 10 > 12): true
// !(4 === '4'): true

console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!false)
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python
//7. Use the Date object to do the following activities
const now = new Date()
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth() + 1) //month(0-11)
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay()) //0 :Sunday,1:Monday
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())
