//HANDLING - PROMISE is an Object

//APPROACH 1
let prom1 = new Promise((resolve , reject) =>{

    let paymentStatus = false

    if(paymentStatus){
        resolve()
    }else{
        reject()
    }
})

// console.log(prom1)

//HOISTING
prom1.then(success).catch(failed)

function success(){
    console.log("Happy to see you...")
}

function failed(){
    console.log("Sorry some emergency...")
}



//APPROACH - 2

let prom2 = new Promise((resolve , reject)=>{

     let paymentStatus = true

    if(paymentStatus){
        resolve("I got a payment")
    }else{
        reject(new Error("I did not recieved"))
    }

})

// console.log(prom2)

prom2.then((a)=> console.log(a))
.catch((b)=>console.log(b))




//APPRAOCH - 3
//PROMISE ALL

Promise.all([
     Promise.resolve('Gud morning'),
      Promise.reject('Afternoon'),
       Promise.resolve('Evening'),
]).then((res)=> console.log(res)).catch((er)=> console.log(er))


//PROMISE RACE

Promise.race([
    new Promise(res => setTimeout(res , 3000, 'Start')),
    new Promise(res => setTimeout(res , 1000, 'Middle')),
    new Promise(res => setTimeout(res , 2000, 'End'))
]).then((a) => console.log(a)).catch((b)=> console.log(b))


//PROMISE SETTLED

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
]).then(results => console.log(results));










