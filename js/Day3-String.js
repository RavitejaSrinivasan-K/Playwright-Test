//STRING METHODS


var str = 'Javascript programing'

console.log(str)
console.log(str.length)


//SLICE - Based on starting index between ending index +1
var str = 'Javascript programing'

var store = str.slice(0, 10)
console.log(store)

var store = str.slice(11, 21)
console.log(store)

var store = str.slice(-21, -11)
console.log(store)


//SUB STRING
var store = str.substring(0, 10)
console.log(store)

var store = str.substring(-10, 0)   //it will not support
console.log(store)


//REPLACE
var str = "Javascript playwright , java selenium"

var store = str.replace('Java' , 'Type')
console.log(store)


//REPLACE ALL
console.log( str.replaceAll('java' , 'Type') )


//UPPERCASE
var str = "Javascript playwright"
console.log(str.toUpperCase())

//LOWERCASE
var str = 'JAVASCRIPT PLAYWRIGHT'
console.log(str.toLowerCase())


//CONCAT
var str1 = 'Javascript'
let str2 = "Programming"
const str3 = `Language`

console.log( str1.concat(str2 , str3) )
console.log(str1 , str2 , str3)
console.log(str1 + " " + str2 + " " + str3)


//TRIM
var str = "  Javascript with Playwright  "

console.log( str.trim() )
console.log( str.trimEnd() )
console.log( str.trimStart() )


//BOOLEAN RETURN TYPE METHODS
var str = "Javascript with Playwright"

//INCLUDES
console.log( str.includes('z') )

//STARTSWITH
console.log( str.startsWith('j') )

//ENDSWITH
console.log( str.endsWith('t') )



//INDEX OF
var str = "Javascript with playwright"
console.log( str.indexOf('as') )

//LAST INDEX OF
console.log( str.lastIndexOf('a'))

//CHAR AT
console.log( str.charAt(1) )


//SPLIT
var str = "raviteja@gmail.com"

console.log( str.split('a' , 2) )


//REPEAT
var str = 'javascript -> '
console.log( str.repeat(5))



//REVERSE
var Name = 'Raviteja@786'

var rev = Name.split('').reverse().join('')
console.log(rev)

