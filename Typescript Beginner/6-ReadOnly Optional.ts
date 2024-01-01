// 1. ReadOnly => The readonly modifier is used to indicate that a property cannot be changed after it's been initialized. It applies to object properties and array elements. Once a property is marked as readonly, you can only set its value during object initialization or inside the constructor if the property belongs to a class and in case of array once array is initlized you can neither re-intilized with new value nore can update the length of array by .push() , .pop() etc.. , Syntax   [ readonly variableName ]

// 2. Optional => The ? symbol is used to mark properties as optional. This means that the property does not need to be present in an object that may be of let say User type. Optional properties are allowed to be undefined or null if not specified. Syntax [ variableName?: type ]

type User = {
    readonly id: string,     // id is readOnly so can not change it again once initlized
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number  // credCardDetails is optional whether it is present or not does not care
}

let freeUser: User = {     // created object of type User which does not have credCardDetails property
    id: "12345",
    name: "Aman Bisht",
    email: "a@gmail.com",
    isActive: true,       
}

let paidUser: User = {     // created object of type User which contain credCardDetails property
    id: "12345",
    name: "Aman Bisht",
    email: "a@gmail.com",
    isActive: true,
    credCardDetails: 200000112      // 
}

// freeUser.id = "23"    // error as id property is readOnly so we can not change it
freeUser.name = "Amu"   // no error 

// here credCardDetails is optional property so by default ts for better error handling automatically add "?" on this property
freeUser.credCardDetails?.toString()    
paidUser.credCardDetails?.toString()


// Here we can create more complex type by combination of other custom type by "&" operator used to create intersection types. An intersection type combines multiple types into a new type that includes all the properties and methods from each individual type. It represents the combination of several types, allowing an object or variable to have characteristics of all the types involved. Syntax [ type NewType = Type1 & Type2 & .. so on ] , EX:

type cardNumber = {
    cardnumber: string
}

type cardData = {
    carddata: string 
}

type cardDetails = cardNumber & cardData & {
    cvv: number
}

/*
  
  here so finally cardDetails was something like this :
  {
    cardnumber: string,
    carddata: string,
    cvv: number
  }

*/

