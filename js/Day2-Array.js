//ARRAY METHODS
// let a = new Array()

//Index starts from 0, 1, 2,...
//Length starts from 1, 2, 3,...

var arr = [10, 20, "javascript" , true, [101, 202, "playwright" , false] ]  //two dymansion

console.log( arr )

console.log( arr [0])
console.log( arr [1])
console.log( arr [2])
console.log( arr [3])
console.log( arr [4])
console.log( arr [5])

console.log( arr.length -1 )  //Property  length : 5 - 1 = 4

console.log( arr[4][1])



//PUSH
var arr = [10, 20, 30, 40, 50]

arr.push(60, true , 'tej')
console.log( arr )

//POP
arr.pop()
console.log(arr)


//TO STRING
var a = [10, "javascript" , false]

var b = a.toString()
console.log(b)


//SHIFT
var arr = [101, 202, 303, 404]

arr.shift()
console.log(arr)

//UNSHIFT
arr.unshift(111, 222, 333)
console.log(arr)


//CONCAT
var arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

var store = arr1.concat(arr2 , arr3)
console.log( store )
console.log( store.toString() )
console.log( arr1 + arr2 + arr3 )
console.log( arr1 , arr2 , arr3 )



//SPLICE - Based on starting index , deleteCount , ...Values

var arr = [100, 200, 300, 400, 500, 600, 700]

//remove
arr.splice(2 , 3)
console.log( arr )

//add
arr.splice(2, 0, 10, 20, 30)
console.log( arr )

//replace
arr.splice(1, 3, 101, 202, 303, 404)
console.log( arr )


//MAP - Transformater

var arr = [4, 9, 16, 25, 36, 49.234 , "Abc"]

var store = arr.map(Math.sqrt)
console.log( store )


var store = arr.map( function(v) {
    return v + 2
})

console.log(store)


//FILTER
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var store = arr.filter(function (v){
    return v % 2 != 0
})

console.log(store)


var store = arr.map(function(v){
    return v % 2==0
})

console.log(store)


//REDUCE 
var arr = [10, 20, 30, 'abc', 50]

var store = arr.reduce(function (num1 , num2){
    return num1 + num2
} , 0)

console.log( store )

//num1 0 + num2 10 = 10
//num1 10 + num2 20 = 30
//num1 30 + num2 30 = 60
//num1 60 + num2 40 = 100  / 60abc
//num1 100 + num2 50 = 150  / 60abc50



//REVERSE
var arr = [101, 'javascript' , false]
arr.reverse()
console.log( arr )


//SLICE - Based starting index between ending index +1
var arr = [100, 200, 300, 400, 500, 600, 700]

var store = arr.slice(2 , 5)
console.log(store)


//VALUES

var arr = [10, 20, 30, 10, 50]

var store = arr.values()

for (const abc of store) {
    console.log(abc)
}

var arr = ["Java" , "Javascript" , "selenium"]

 arr.reverse()

// for (let abc of arr) {
//     console.log( abc )
// }



//FOR EACH
var arr = ["Java", "selenium",  "Javascript", "playwright"]

arr.forEach(function(a){
    console.log(a)
})



//JOIN
var arr = [10, 20, 30, 40]

console.log( arr.join(' <--> ') )


//ENTRIES
var arr = [100, "playwright" , true , 200, 'javascript' , false]

for (const [index , value] of arr.entries()) {
    // console.log([ index ])
    // console.log([ value ])
     console.log([index, value])
}



//SORT
//ASC
var arr = [11, 2, 9, 81, 23, 96, 43, 18]

var store = arr.sort(function (a, b){
    return a - b
})
console.log( store )


//DESC
var store = arr.sort( (a, b) =>{    
    return b - a
})
console.log( store )

//a 11 - b 2 = 9
//a 11 - b 9 = 2
//a 11 - b 81 = -70
//a 81 - b 23 = 78


