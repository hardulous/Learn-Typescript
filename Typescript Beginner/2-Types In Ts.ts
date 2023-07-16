// Here ts server best in a situation let say ts is helping out and figuring out what data is about to be processed or what data is about to be coming from any resource or what data your function is going to send out or accept. ex , a function let say accept 2 number (n1,n2)=>{} and perform some math opeation and return another no so in a js code normally we check type of n1 or n2 and if both are number then we perfrom operation and return output otherwise return but with ts we dont have to excplicity check n1 or n2 if number so save extra line of code. 

// 1. Types in ts =>  There are many types in ts , numbers , strings , booleans , null , undefined , void , objects , arrays , tuples etc... . There exist other types as well like any ( makes code does not worry about type ) , never and unknown . To create a type syntax is ::

// let variableName : type = value (optional)

// Almost all types in typescript are lowercase neither uppercase nor camelcase

let greeting: string   // It means greeting is of type string and only string type value can be stored inside it and now greeting can use only in-built method of string as autosuggestion

greeting = "Hello Aman"
console.log(greeting)
// greeting = 42    // error as greeting is of type string so can not store number

let n1 = 5
// n1.toUpperCase()   // error as toUpperCase() is a method of string not of number but in js file this will not throw error

let userID: number = 33364.34    // userID will always be of type number so the in built method we use will be for number only and does not matter whether it is decimal point number it is always of type number because in js there is not int or float type 

let isLoggedIn: boolean = false   // again isLoggedIn will always be of type boolean and autosuggestion and in-built method we use must be for boolean only 

// 2. Type Inference => Here in ts everytime mentioning type by : type syntax for variable is not a good practice as we are making it to obvious and this is where type inference come , Type inference is a powerful feature that automatically deduces the types of variables when they are declared based on the values assigned to them. When you declare a variable without explicitly specifying its type, type inference based on the assigned value determines the most appropriate type for that variable. This helps reduce the need for explicit type annotations, making the code cleaner and less error-prone while still benefiting from static typing of ts. But inference is not something that we should alwayse use but there exist some case where we have to give type to variable instead of using inference

// TypeScript automatically infers the type of the variable based on the assigned value.

let message = "Hello, TypeScript!";  // TypeScript infers the type of 'message' as string so can not store other type value in it.
// message = 32     // error as message is of tyoe string

let count = 42;   // TypeScript infers the type of 'count' as number so can not store other type value in it.
// count = "32"   // error as count is of type number
 
let isActive = true;   // TypeScript infers the type of 'isActive' as boolean so can not store other type value in it.
// isActive = 32      // error as isActive is of type boolean 


// 3. Any Type => Any represents a dynamic or untyped value. When a variable is declared with the any type it can store any type of value, TypeScript essentially turns off type checking for that specific variable. Using any allows you to opt-out of TypeScript's static typing and have maximum flexibility, but it also means you lose the benefits of type checking for that particular variable so always try to avoid use of any.When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any . EX ::

// let hero;       // here default type for hero is any
let hero: string   // now if we try to give hero value other than string then it will show error

function getHero(){
    return "Thor"
}

hero = getHero()  // here even if getHero() is returning string still hero is of type any which is bad case if my application depend on hero to be string and to avoid this always give type initially

// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay. But in some cases You usually want to avoid this, because any isn’t type-checked. Use the compiler flag [ noImplicitAny ] to flag any implicit any as an error in ts config file.

export {}