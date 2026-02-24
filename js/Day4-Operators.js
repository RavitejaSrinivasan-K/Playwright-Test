//OPERATORS

//1 ARITHMETIC

var a = 10
var b = 20

var c = a + b    // 10 + 20
console.log(c)

var c = a - b    //+10 -20 = -10
console.log(c)

var c = a * b    // 10 * 20
console.log(c)

var c = a / b    // QUOTIENT
console.log(c)

var c = a % b    // REMINDER
console.log(c)

var c = a ** b    // POWER ROOT 10*10*10* upto 20 times
console.log(c)


//2 ASSINGMENT =

var a = 20
var b = 10

a = a + b   //a = 20 + 10
console.log(a)

a = a - b   //a = 30 - 10
console.log(a)

a = a * b   //a = 20 * 10
console.log(a)

a /= b   //a = 200 / 10
console.log(a)

a %= b   //a = 20 % 10
console.log(a)

a **= b   //a = 0 ** 10
console.log(a)


//3 COMPARISON

var a = 100
var b = "100"

console.log( a == b )    //It will check loosly content value 

console.log( a === b )   //It will check strictly type of value

console.log( a > b )

console.log( a >= b )

console.log( a < b )

console.log( a <= b )

console.log( a != b )

console.log( a !== b )



//LOGICAL
// && AND , || OR , ! NOT

let age = 18

if( age < 56  &&  age > 18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


if( age < 56  ||  age > 18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


let abc = 1
if(!abc){
    console.log(true)
}
else{
    console.log(false)
}



//TERNARY ?

var msc = 18

var ban = (msc < 23 || msc == '18') ? "Success" : (msc === "18") ? true : 

console.log(ban)



//UNARY
//PRE & POST INCREMENT
var a = 100
console.log( a++ )
console.log(a)
console.log(a)


//PRE & POST DECREMENT
var b = 200
console.log( --b )
console.log(b)




