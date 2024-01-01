// 1. Functions In Typescript => Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input (parameter) and output (return) values of functions. In case of variable inference infer the type nicely but in case of function we should at least give type to parameter of function to avoid unexpected error 

function addTwo(num){
   // num.toUpperCase()    // allow me do not throw error
   return num + 2 
}

// Here any operation on variable of type any will also return a any result

addTwo(5)   // here the type of addTwo() if i hover is any based on inference and also type of parameter num is also any instead i am supposed to pass number only but even if i by mistake pass string it will allow me but it can throw error at runtime 

addTwo("5")  // here the type of parameter is any so even passing string does not throw error but can give error at runtime

// Now to fix this again we use same syntax we use with variable to give type

// (A). Parameter Type Annotations =>  When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name: . When a parameter has a type annotation, arguments to that function will be checked by ts. Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

function tsAddTwo1(num: number){
    // num.toUpperCase()   //  now with ts it will throw error as toUpperCase() is a method for string only
    return num + 2         
}

// tsAddTwo1("23")    // error as tsAddTwo1() expect string as parameter not number
tsAddTwo1(23)   // output =>  25

// (B). Return Type Annotations =>  You can also add return type annotations. Return type annotations appear after the parameter list: . Much like variable type annotations, you usually don’t need a return type annotation for function because TypeScript will infer the function’s return type based on its return statements. 

function tsAddTwo2(num: number) : number{
  // return "23"     // error as tsAddTwo2() is expected to return number type value 
  return num + 2     
}

// Now lets create a function which will return uppercase of word 

function getUpper(val: string){
    return val.toUpperCase()   // as i know val is always string so i get autosuggestion related to string 
}

// getUpper(5)   // error as getUpper() expect string
getUpper("aman")

function signUpUser(name: string , email: string , isPaid: boolean){
    //  .... return nothing so default return type is void
}

// signUpUser('Aman Bisht',"amanbisht123abc@gmail.com","ok")   // error as 3rd argument need to be boolean   
signUpUser('Aman Bisht',"amanbisht123abc@gmail.com",true)   

// Here sometime we need to pass only limited parameter and will give some default value to parameters after annotation

let loginUser = (name: string, email: string, isPaid: boolean = true): string=>{ 
    // ....... body and here isPaid default value is true 
    return "OK"   // as return type is string not void so have to return string value 
}

loginUser("Spider Man","bishtaman1230@gmail.com")


// (C). Anonymous Functions / Callback Functions =>  Anonymous or callback functions are a little bit different from regular or normal function . When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types , And we can also give return type similar to the way we write return type for regular and normal function

const heroes = ["Thor", "Spiderman", "Ironman"]
const marks = [1,2,3]

heroes.map(function(item){     // here based on heroes is array of string the type of item is string
    return `hero is ${item}`
})

marks.map((item) : number =>{           // here based on marks is array of number the type of item is number
    // return "Aman"                // error as return type is number so can not return string value
    return item * 2
})

// Even though the parameter item didn’t have a explicit type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type item will have. This process is called contextual typing because the context that the function occurred within informs what type it should have.

function consoleError(msg: string): void{
    console.log(msg)     
    // return "Hello"     // error as void can not return anything
}

// Here as above function is not returing anything so default return type is void , But this is not a good practice so when creating a void function always give return type as void so that other developer using this code will not accidently return something from this function and if try then it will give error 

consoleError("Aman")


// (D). never => functions with return type never will never return a value , never represents a value that never occurs. It is used to indicate that a function will never return any value. never is typically used in specific scenarios where a function or expression should never produce a result or complete its execution. EX : When a function is explicitly defined to never return a value or to throw an error, you can annotate its return type as "never" to indicate that it won't produce any output.

function handleError(msg: string): never{    
    throw new Error(msg);     // here as this function return nothing or throw error so for good pratice give type as never
}


export {}