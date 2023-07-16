// Unions In Ts => Let say we are in situation where we are not sure what type of data is coming in , it might be a number , string , dont know then instead of using any in this case union come to the rescue. Union types allow you to specify that a variable or parameter can be of one type out of multiple types. This means that a variable with a union type can take on any value that matches one of the specified types. Union types are denoted using the pipe symbol | between the types. Syntax [ type MyUnion = Type1 | Type2 | Type3 ] , EX ::

let score: number | string = 33; // here this score can hold value either of type string or number
score = "Aman";
score = 32;
// score = true    // here score can not be boolean

// NOTE :: when working with union try to keep the variable type as strict as possible to avoid runtime error and also with union the autosuggesstion you get will be the intersection of property or method which is common for both the type , ex if union of string | number the auto-suggesstion will be toString() , valueOf() etc .. because they are common for both string or number

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let person: User | Admin = {   // here this person object can be of type either User or Admin
  id: 1, 
  name: "aman",               // as it contain name property so it is of type User
};

person = { id: 2, username: "Hello" };    // now it contain username property so it is of type Admin


// This union is useful for function because sometimes there exist situation where function either accept multiple values or return multiple values 

function getDbId(id: number | string){  // here id can be of type either number or string
    console.log(id)
    return id      // here as id is union of number or string so return type is also union of number or string because as type of id is know only at runtime not in compile tine
}

let res1 = getDbId(123)    // as getDbId() return type is union of number or string so res variable type is also either number or string 

let res2 = getDbId("aman")


// Here above everything is fine but problem comes when we do some manipulation with function parameter ::

function getData(id: string | number){

    // here id is of type either string or number so if i try to use either string method or number on id , ts will throw error

    // id.toUpperCase()          
    // id.toFixed()

    // the above error is because the id can be number as well but if we use toUpperCase() on number it is a runtime error and same for this id can be string as well but if we use toFixed() method on string it is a runtime error , So to avoid error ts simply does not allow 

    // So to solve this issue we have to perfrom strict check on id manually 
    if(typeof id === "string"){
        id.toUpperCase() // come here means id is guranteed to be a string and on hover on id it shows string
    }
    else{
        id.toFixed()  // come here means id is guaranteed to be a number and on hover on id is shows number
    }

}


// Unions with array is also possible ::

let data1: number[] = [1,2,3]   // array of numbers
let data2: string[] = ["1","2","3"]    // array of strings
let data3: string[] | number[] = [1,2,3]     // here it can be either array of strings or array of numbers  

data3 = ["aman","bisht","acey"]   // not error

// but now let say i want an array which is combination of both number and string so in this case ::

let data4: (string | number)[] = [1,2,3,"1","2","3"]  // here now the data4 array can store both number and string value

data4.push(4)
data4.push("aman")
// data4.push(true)    // cannot add boolean type value


// We can also make some variable to be very strict that is constant variable::

let pi: 3.14 = 3.14   // here pi is of type 3.14 that is it can store only 3.14 value or nothing else
// pi = 213    // error can only store 3.14

let seatAllotment: "aisle" | "middle" | "window"   // here now this variable can only have either of this 3 union value

seatAllotment = "middle"
// seatAllotment = "crew"    // error as it can only has aisle , middle or window as value