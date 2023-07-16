// In js most of the time we create object with key - value pair without giving type and use in application ex ::

const User = {
    name: "Aman",
    email: "aman@gmail.com",
    isActive: true
}

// But above way is bad and can give runtime error if by mistake name property let say given number instead of string , so in ts we can also give type to object 

function createUser({name: string, isPaid: boolean}){   
   // here type of parameter is object with string or boolean property
}

createUser({name: "Aman", isPaid: true})    

// Here we can also give return type of function as an object

function createCourse():{name: string, price: number}{
   return {name:"React js",price:200}         // here now the return type of this function is an object which contain name or price property so now i am bounded to return it 
}

const course = createCourse()   // now by type inference course type also become object with name or price property


// Odd behaviour of object is that let say i have created a function which accept 2 property name , age but i want to pass argument as an object which may or may not contain 3rd property let say email , so in this case i can not pass that 3 argument object to the function directly but due to wierd behaviour of object i can pass in-directly , EX ::

function student({name:string , age: number}){

}

student({name:"Aman bisht" , age: 22})  
// student({name:"Aman bisht" , age: 22 , email: "aman@gmail.com"})   // error as the function is not expecting email property but let say i still want to pass email property to be accessible so in this case ::

let obj = {
    name: "Aman",
    age: 22,
    email: "aman@gmail.com"
}

student(obj)   // here now i can also pass email property even if student() is not accepting it which is weird beause ts should stop me 




