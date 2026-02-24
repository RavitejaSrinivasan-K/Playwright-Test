//STRING METHODS

var str = "Javascript Programming"

console.log(str)
console.log(str.length)   //Property


//SLICE - Based on starting index between ending index +1
var store = str.slice(0, 10)
console.log(store)

var store = str.slice(11, 22)
console.log(store)

var store = str.slice(-22, -11)
console.log(store)



//SUB STRING
var store = str.substring(0, 10)
console.log(store)

var store = str.substring(11, 22)
console.log(store)

var store = str.substring(-22, -11)
console.log(store)


//REPLACE
var str = "javascript plawyright , java selenium"

var store = str.replace('java' , 'Type')
console.log(store)

//REPLACE ALL
var store = str.replaceAll('java' , 'Type')
console.log(store)


//UPPER CASE
var str = 'javascript'
console.log(str.toUpperCase())

//LOWER CASE
var str = 'JAVASCRIPT'
console.log(str.toLowerCase())


//BOOLEAN TYPES
var str = 'Javascript with Playwright'

//INCLUDES
var store = str.includes('With')
console.log(store)

//STARTS WITH
console.log(str.startsWith('J'))

//ENDS WITH
console.log(str.endsWith('t'))



//INDEX OF  
var str = 'Java with Selenium'
console.log(str.indexOf('a'))

//LAST INDEX OF
console.log(str.lastIndexOf('z'))

//CHAR AT
console.log(str.charAt(150))


//CONCAT
var str1 = 'javascript '
let str2 = 'programming '
const str3 = 'language'

console.log(str1.concat(str2 , str3))
console.log(str1 + str2 + str3)
console.log(str1 , str2 , str3 )


//TRIM
var str = '  Javscript  with  Playwright  '
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())


//REPEAT
var str = 'javascript ->'
console.log(str.repeat(5))


//SPLIT
var str = 'raviteja@gmail.com'
console.log(str.split('a'))


//REVERSE
var str = "Javascript"
var rev = str.split('').reverse().join('')
console.log(rev)





