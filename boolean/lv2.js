//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter base:')
let height = prompt('Enter height:')
let area = 0.5 * base * height
alert(area)
// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let sideA = prompt('Enter side A:')
// let sideB = prompt('Enter side B:')
// let sideC = prompt('Enter side C:')
// let perimeter = Number(sideA) + Number(sideB) + Number(sideC)
// alert(perimeter)
//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt('Enter length:')
// let width = prompt('Enter width:')
// let perimeter = 2 * (Number(length) + Number(width))
// let area = Number(length) * Number(width)

// console.log('Perimeter:', perimeter, 'area:', area)

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = prompt('Enter radius:')
// const pi = 3.14

// let area = pi * Number(radius) * Number(radius)
// let c = 2 * pi * Number(radius)
// console.log('area:', area)
// console.log('circumference of a circle:', c)
//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//y = ax+b
//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope = (10 - 2) / (6 - 2)
console.log(slope)
let slope1 = (2 - 10) / (2 - 6)
console.log(slope1)
//7 Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter Hours:')
let ratePerHour = prompt('Enter rate per hours')
let total = Number(hours) * Number(ratePerHour)

alert(total)
//8 If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt('Enter your name:')
name.length > 7 ? alert('your name is long') : alert('your name is short')
//9.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let age = Number(prompt('Enter your age:'))
let remainingYear = 100 - age
let reamingSecond = remainingYear * 365 * 24 * 60 * 60

console.log(
  `You have live ${
    age * 365 * 24 * 60 * 60
  } second.You have  ${reamingSecond} second more to live 100 years `
)
//10Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let dateInfo = new Date()
let year = dateInfo.getFullYear()
let month = dateInfo.getMonth() + 1
let date = dateInfo.getDate()
let hour = dateInfo.getHours()
let minutes = dateInfo.getMinutes()
console.log(`${year}-${month}-${date} ${hour}:${minutes}`)
console.log(`${date}-${month}-${year} ${hour}:${minutes}`)
console.log(`${date}/${month}/${year} ${hour}:${minutes}`)
