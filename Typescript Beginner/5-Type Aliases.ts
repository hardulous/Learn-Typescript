// Type Aliases => Let say in a project i am a object user which consist of name , email , role property and this object will be passed 2 many function so those function also need to have type as user in their parameter but everytime mentioning type in function parameter is repeatative task and to avoid repeatation we use type in ts. Type aliases allow us to create custom type or custom data type which we can use as a type for variable , function , return type etc .. and this improves code readability, maintainability, and reduce duplication when using the same complex type in multiple places. Syntax is type variableName = defination of type , EX ::

type User = {           // A custom User type which in turn can be used as a type anywhere 
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User{
    return {...user , name: user.name.toUpperCase()}
}

// Here above function will accept parameter user of type User and return a object of type User

const newUser = createUser({name:"aman bisht", email: "aman@gmail.com", isActive: true})   // here now the type of variable newUser also by inference become User

// A good practice is to create seprate file for the types and import them in actual file where they are required