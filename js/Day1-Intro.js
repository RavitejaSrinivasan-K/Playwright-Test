//SINGLE LINE COMMENT
/**
 * Multi
 * Line
 * Comments
*/

//1 FIXED VALUES
console.log("Javascript !@#$% 23456")    //STRING

console.log(23456789)    //NUMBER

console.log(true)    //BOOLEAN

console.log( ['playwright' , 786 , false] )     //ARRAY

console.log( {name : "Raviteja" , day : 1 , course : true} )    //OBJECT



//2 VARIABLE VALUES
//VARIABLE KEYWORDS : VAR , LET , CONST

//VAR - Function Scope

var a = 10;


var a = 20  //Re-Declaration is allowed


a = 30   //Re-Assingment is allowed 
console.log(a)


//LET - Block Scope

let b = 100




// let b = 200     //Re-Declaration is not allowed


b = 300       //Re-Assingment is allowed 
console.log(b)



//CONST - Block & Immutable Scope

const c = 1000


// const c = 2000     //Re-Declaration is not allowed


// c = 3000     //Re-Assingment is not allowed
console.log(c)



//GLOBAL

var abc = 100

{
    //LOCAL
     abc = 'tej'
   console.log( abc )  //tej
}

  console.log( abc )    //tej



//GLOBAL

let ab = 101

{
    //LOCAL
     ab = 'Java'
   console.log( ab )   //Java
}

  console.log( ab )   //101


//GLOBAL

const ac = 1001

{
    //LOCAL
    const ac = 'Javascript'
   console.log( ac )   //Javascript
}

  console.log( ac )   //1001





//DATA TYPES
//PRIMITIVE - IMMUTABLE (CANNOT BE CHANGE) - STACK MEMORY

//Number
var n = 786.12
console.log(typeof n )


//String
var s = "Javascript"
console.log(typeof s )


//Boolean
var e = false
console.log(typeof e )


//Null
let m = null
console.log(typeof  m )


//Undefined
let u
console.log(typeof u )


//NaN - Not a Number
let r = 'hello' * 5
console.log(typeof r )



//NON - PRIMITIVE - MUTABLE (CAN BE CHANGE) - HEAP MEMORY


//Array
const arr = [10, 20, "Javascript" , true]
console.log(typeof arr )


//Object
const obj = { company : "TechM" , empId : 786 , job : false}
console.log(typeof obj )


//Function
function greet() {
    console.log("Hello World!")
}

greet()
console.log( typeof greet )


//Index starts form 0
arr[2] = "playwright"
console.log(arr)

//property
obj.company = "Tcs"
console.log( obj )

console.log(arr.length)  // Returns the number of elements in the array
console.log(Object.keys(obj))  // Returns the object's property names
