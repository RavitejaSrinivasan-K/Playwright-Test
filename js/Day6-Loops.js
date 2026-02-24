//LOOPS

//FOR - Initialization ; Condition ; Increment/decrement

for(let i=1 ;  i <= 5 ; i++ ){
    // 1 <= 5 = 1
    // 2 <= 5 = 2
    // 3 <= 5 = 3
    // 4 <= 5 = 4
    // 5 <= 5 = 5
    // 6 <= 5 = stop
    console.log(i)
}

console.log('---WHILE---')
//WHILE 
//Initialization
//Condition
//Increment / Decrement

let j = 1

while( j <= 5 ){
    console.log(j)
    j++
}


console.log('---DO WHILE---')

//Initialization
//Increment/Decrement
//Condition

let k = 1

do{
    console.log(k)
    k++
}

while(k >= 5)


console.log("---FOR OF 1---")
//FOR OF

var arr = ['harisha' , 'dhana' , 'balaji' , 'bhuvanesh' , 'arun' , 'aravind' , 'steffi']

for (const names of arr) {
    console.log(names)
}


console.log("---FOR OF 2---")
for( let n=0 ; n <= arr.length-1 ; n++){
    console.log(arr[n] , n)
}


//FOR EACH

arr.forEach(function (n){
    console.log(n)
})


console.log("---FOR IN---")
//FOR IN
var obj = {
    company : "TechM" , 
    job : true,
    empId : 786,
    status : false
}


for (const key in obj) {
    //  console.log(key)
    // console.log(obj[key])
    console.log(key + " : " + obj[key])
    
}



//1 Print multiple values using all loops
//2 While iterating a values check whether same name is available or not ex; 'tej' == 'tej' stop the execution
//3 break , continue, print only condition meet value

var val = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(const elem of val)
// {
//     if( elem == 5){
//        continue
//     }
//     console.log(elem)
// }

var arr = ['harisha' , 'dhana' , 'balaji' , 'bhuvanesh' , 'arun' , 'aravind' , 'steffi']

for(let i=0 ; i < arr.length ; i++){

    if(arr[i] == 'arun'){
        break
    }
    console.log(arr[i])
}











