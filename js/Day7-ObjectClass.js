//OBJECT 
// appraoch  1

var obj1 = {
    name : "tej" , 
    company : 'TechM' ,
    jobStatus : false,
    empId : 786 ,
    height : 5.6
}

console.log(obj1)

//DOT notation
console.log(obj1.empId)

//Brace notation
console.log(obj1['company'])


//ADD
obj1.weight = 64
console.log(obj1)


//UPDATE
obj1.name = 'Ravi'
console.log(obj1)


//DELETE
delete obj1.company 
console.log(obj1)




//appraoch 2
let obj2 = new Object()

obj2.name = 'Arjun'
obj2.age = 23
obj2.job = true
obj2.course = function(){
    console.log('Hello World!')
}
obj2.arr = { stdName : 'arun' , stdId : 456 , stdCourse : "Bsc"}

console.log(obj2)
obj2.course()

//ADD
obj2.empId = 123
console.log(obj2)

//UPDATE 
obj2.name = 'Eashwar'
console.log(obj2)

//DELETE
delete obj2.course
console.log(obj2)

console.log(obj2.arr)
console.log(obj2.arr.stdId)    //Chaining concept




//CLASS - BASE , PARENT , SUPER (PascalCase)
//THIS is a Keyword. Use to access current class properties

class User1{

    constructor(name , ai){
        this.name = name
        this.course = 'javascript'
        this.ai = ai
    }

    logIn(name){  //camelCase
        console.log("Hi" , name , "Welcome!")  //Local
        return this
    }

    logOut(){     
        console.log("Hi", this.name ,"Thank you for attend today sesion", this.course)  //Global
    }

    coursePurchase(){
        console.log('Hi' , this.name , 'Thank you for purchase new Course :' , this.ai )  //Re-Use (Global)
    }

}

let person1 = new User1('Harish' , 'ChatGPT-5')

person1.logIn('Jai')
person1.logOut()
person1.coursePurchase()

person1.logIn('Harish').coursePurchase()





//CLASS - DERIVED , CHILD , SUB
//STATIC is a keyword. We can access by using class name only without creating an Object.
// static property(variables) and static method(functions)

//Inherite - using Extends keyword. Use to access parent class methods
//SUPER - is keyword. Use to access parent class propeties.

//Method Chaining


class User2 extends User1{

    //Static varibale(property)
    static countOfMail = 0

    constructor(name, ai){
        super(name , ai)  //Parent class Properties access
        this.count = 0
        User2.countOfMail++
    }

    fetchData(){
        console.log(`This is One mail multi users count : ${++this.count} `)
    }

    static display(){  //static method
        console.log(`This is unique mail count : ${User2.countOfMail}`)
    }


}

let p2 = new User2()

p2.fetchData()
p2.fetchData()
p2.fetchData()

User2.display()
User2.display()
User2.display()


let p3 = new User2('Prabhas' , 'Copilet')
p3.logIn("Prabhas").coursePurchase()






//OOPs - OBJECT ORINETED PROGRAMMING SYSTEM OR STRUCTURE

//1 . Encapsulation - wrapping a data and method single entity
//2 . Inheritance
/*
single inherite
multiple inherite - generation level
multi level inherite
hybrid
*/

//3 . Polymarphism 
/*
Method OverLoading  - not possible
Method OverRiding 
*/

//4 . Abstraction - Hiding implementation 
/*
static
dymanic
*/



































































