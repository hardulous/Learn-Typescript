// Tuples In Ts => It is a data structure available only in typescript not in javascript world , A tuple is a fixed-length array where each element can have a different data type. Tuples are similar to arrays, but they have a predefined structure, and the number of elements and their types are fixed at the time of declaration. Each element in a tuple has an associated index that determines its position in the tuple. EX ::

// array of string only
let users1: string[] = ["aman","acey","nihir"]

// now let say i want array of string , number , boolean etc .. but in a precise order and of fixed length so i will use tuple for this ::

let users2: [string, number, boolean]   // a tuple of fixed length 3 where 1st , 2nd and 3rd element must be of type string , number and boolean respectively as pattern is fixed

users2 = ["aman", 100, true]    // correct order
// users2 = [199,"aman",true]   // error as order of the element in tuple is wrong 1st is string , then number and at last a boolean so have to follow the order

// users2 = ["aman", 123, false, "hello"]   // error as user2 tuple is of only 3 length but here is 4

// ### NOTE :: 1. Tuple mostly use when making api call to make structure of api like , method , setting , header , body etc to fixed parameter length and type 

// 2. Other use case of tuple is for rgb color code : 

let rgb: [number, number, number]    // for color code to be stored in each element and only 3 is required to make a rgb color
 
// 3. Let say we have user which consist of id and email so :

type User = [number, string]   // User type is tuple which have only 2 element number or string respectively

const newUser:User = [112, "aman@gmail.com"]   // can have only 2 element in correct order

// here tuples is also similar to array so we can access or modify element using index as well ::

newUser[0] = 100
// newUser[1] = 200    // error as 2nd element of User tuple must be string 


// 4. One wierd behaviour of tuple is that we have given guranteed that the User tuple will be of only 2 length and contain number or string element only but ts still allow us to use .push() , .pop() , etc... method of array to manipulate it but can work with only number or string, EX ::

// newUser.push(true)   // can not add value other than number or string
newUser.push(123)
newUser.push("aman")
newUser.pop()

// To understand this behaviour study this stack-overflow post @@@@@ https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array @@@@@


