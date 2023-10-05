/*1.Using console.log() print out the following statement:
 The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another`
)
/*2. Using console.log() print out the following quote by Mother Teresa:
 "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
)
//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const num = '10'
console.log(typeof num)
const numInt = Number(num)
console.log(numInt) // number

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const number = '9.8'
console.log(typeof number)
const numberFloat = Math.round(parseFloat(number))
console.log(numberFloat)
//5.Check if 'on' is found in both python and jargon
const str = 'python and jargon'
console.log(str.includes('on'))
//5. I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))
//6. Generate a random number between 0 and 100 inclusively.
const random0to100 = Math.floor(Math.random() * 101)
console.log(random0to100)
//7. Generate a random number between 50 and 100 inclusively.
const random50to100 = Math.floor(Math.random() * 51) + 50
console.log(random50to100)
//8. Generate a random number between 0 and 255 inclusively.
const random0to255 = Math.floor(Math.random() * 256)
console.log(random0to255)
//9.Access the 'JavaScript' string characters using a random number.
const js = 'JavaScript'
console.log(Math.floor(Math.random() * js.length))
//10.Use console.log() and escape characters to print the following pattern.

/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log(`
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`)
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const str1 =
  'You cannot end a sentence with because because because is a conjunction'
console.log(str1.substr(31, 24))
