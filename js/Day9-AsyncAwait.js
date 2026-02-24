//ASYNC & AWAIT

//Sync
console.log("Start")
console.log('Middle')
console.log('End')

//A Sync
console.log("Morning")
setTimeout(()=> console.log('Afternon'), 2000)
console.log('Evening')


//ERROR HANDLING

try{
    let input = "23"

    if(isNaN(input)){
        throw "Invalid Detail"
    }
    else if(input == ''){
        throw 'Mantodary Field'
    }else{
        console.log('Thank you for submit!')
    }
}catch(er){
    console.log(new Error(er))
}


//ASYNC

function greet(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            // resolve("Thank you for attend Async session!"),
            reject("Today is End of JS")
        })
    })
}

// console.log(greet())


async function display(){
    console.log("Hi, This is Async!")

    try{
        let prom = await greet()
        console.log(prom)
    }catch(err){
        console.log(err)
    }

    console.log("Thats all about!...")
}


display()





