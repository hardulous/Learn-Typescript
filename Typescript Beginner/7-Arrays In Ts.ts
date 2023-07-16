
// ##### To specify the type of an array we have 2 ways in typescript 

// 1. for arr [1,2,3] use the syntax [ number[] ] , This syntax works for any type and the default type of empty array by inference is never[] 

const arr = []    // it is an empty array so default type is never[] 

// arr.push("")   // here type of arr array is never and never is something which is supposed to never execute or end the things , so need to give type to array at starting always

const superHeros: string[] = []

superHeros.push("Batman")   
superHeros.push("Thor")   
// superHeros.push(1)         // error as superHeros is array of string so can not push number value on it
// superHeros.push(false)    // error as superHeros is array of string so can not push boolean value on it

const marks: number[] = [1,2,3]   // marks is array of number only

marks.push(4)            
marks.push(10)

// 2. for arr [1,2,3] use the other syntax [ Array<number> ] , EX ::

const students: Array<string> = []   // different syntax but again student is array of string only

students.push("Aman")
students.push("Acey")
// students.push(1)        // error on pushing value other than string

const values: Array<number> = [10,20,30]

values.push(40)
values.push(100)


// 3. We can also create custom type for array using "type" keyword of typescript , EX ::

type User = {
    name: string,
    isActive: boolean
}

const users1: User[] = []      // here my users1 array is array of object of type User which means this users1 array can consist of only those objects which have schema of type User

users1.push({name:"Aman",isActive:true})
// users1.push("")    // error as value we push in users array must be of type User


const users2: Array<User> = []   // similar to work like above but different syntax array of User type object


// 4. We can also give type for 2-d , 3-d array and so on .. , EX ::

const array2D: number[][] = [
    [1,2,3],
    // ["23"],     // error as array2D is 2d array of number so can not have string value
    [3,4,5]
]