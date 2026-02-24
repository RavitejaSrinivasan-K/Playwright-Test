//CONDITIONAL STATEMENT

//IF , ELSE IF , ELSE,  SWITCH - BREAK 


let mark = 101

if(mark >= 80){
    console.log("GRADE : A")
}
else if(mark >= 70){
    console.log("GRADE : B")
}
else if(mark >= 60){
    console.log("GRADE : C")
}
else if(mark >= 35){
    console.log("GRADE : D")
}
else{
    console.log("GRADE : E")
}


mark = 97
if(mark >= 90){
    console.log("Your Pass with high value")

    if(mark){      //NESTED IF
        console.log(true)
    }else{
        console.log(false)
    }
}



//SWITCH CASE
let day = 3

switch(day){

    case 1:
        console.log("MONDAY")
    break
    case 2:
        console.log("TUESDAY")
    break
    case 3:
        console.log("WEDNESDAY")
    break
    case 4:
        console.log("THURSDAY")
    break 
    case 5:
        console.log("FRIDAY")
    break
    default :
        console.log("Happy it week end!")    
    break    
}



//TYPE CONVERTION

var a = 101
console.log( a)
console.log( typeof a )

var str = String(a)
console.log(str)
console.log(typeof str)



//NUMBER

var a = "786"
console.log(a)
console.log(typeof a)

var num = Number(a)
console.log(num)
console.log(typeof num)


//BOOLEAN
var b = -234
console.log(b)

var boo = Boolean(b)
console.log(boo)
console.log(typeof boo)


//ARRAY
var ar = 102030
console.log(ar)

var arr = Array(ar)
console.log(arr)

console.log(typeof arr)


//OBJECT
var ob = "Arjun"
console.log(ob)

var obj =Object(ob)

console.log(obj)
console.log(typeof obj)



//ERROR
// ReferenceError
// TypeError
// SyntaxError
// AggregateError
// MediaError

