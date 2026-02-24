//FUNCTION TYPES

//1 BASIC FUNCTION

//without parameter
function greet(){
    console.log('hello world!')
}
greet()


//with parameter
function generate(n){
    console.log('Hi ', n)
}
generate('Vikram')
generate('Arjun')


//multi param
function isEven(num1 , num2){
    return num1 == num2
}
console.log(isEven(10, 11))
console.log(isEven(5, 5))


//default param
function defalt(name = 'Ai'){
    console.log('Hi ' + name)
}
defalt('Feroz')
defalt()



//2 FUNCTION EXPRESSION

//without param
let a = function(){
    console.log('Hi welcome!')
}
a()

//with param
let b = function(n){
    return n * 2
}
console.log(b(10))


//multi param
let c = function(num1 , num2, num3){
    return num1 + num2 - num3
}
console.log(c(10, 20, 5))


//default param
let d = function(name = 'User'){
    console.log('Hi' , name , 'How are you !')
}
d()
d('Dinesh')



//3 ARROW FUNCTION

//without param
let a1 = () => {
console.log('Welcome to Tech World!')
}
a1()

//with param
let b1 = (v) => console.log(v + 20)

b1(5)


//multi param
let c1 = (l, b, h) =>{
    return l* b* h
}

console.log(c1(2, 4, 6))


//default param
let d1 = (name = 'Ai Customer') => {
    console.log('Hi' , name , 'I got you!')
}

d1()
d1('tej')



//HOISTING
function robot(){
console.log('Hi This is Robot..')
}

robot(18)

function robot(age = 23){
console.log('Hi this is Tej' , age)
}

//HOISTING IS NOT POSSIBLE FOR OTHER FUNCTION TYPES
let r = function(){
    console.log('ABC')
}
r()

 r = function(){
    console.log(123)
 }


//4 ANYNOMOUS FUNCTION

console.log('START')

setTimeout( () => {
    console.log('MIDDLE')
} , 3000)

console.log('END')



//5 IIFE - Immediate Invoked Function Expression

// (function (){
//     let secretKey = 'Test@123'
//     console.log('Secret Key is Hidden...')
// })()



//6 CALL BACK FUNCTION

function tcs(){
    console.log('Emplyoee List')
}


function capGemini(call){
    console.log('This is Serive Based')
}

capGemini(tcs())


//=----------------=------------------=


function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ravi", sayBye);


iPhone(redmi())



