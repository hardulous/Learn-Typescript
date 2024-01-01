let user = {
    name:"Spider Man",
    age: 10
}

console.log("Aman Bisht")
console.log(user.name)
// console.log(user.email)   :: as email property not exist in user so ts will throw error at compile time but same behaviour will not throw error if it is .js file infact .email will show undefined


// Here in above code even it is a simple js code cannot be executed at all because it is in ts format or file and also if we put this into production it is not going to work and this is where 'tsc' command come which will convert or transpile your ts code into a seprate js file of js version that can be executed or used in production as well 

// here if i execute this ts file by tsc a js version of this file will be created but also an error will come on message variable that "Cannot redeclare block-scoped variable 'user'" . This is because this file is treated as script rather than module as there is nothing getting export from this file . A module has its own scope but script run in global scope so to get rid of this error just add export statement which export nothing from this file , By adding export statement ts will treat this file as module rather than script

export {}