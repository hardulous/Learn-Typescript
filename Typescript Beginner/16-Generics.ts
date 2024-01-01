// GENERICS IN TS => Generics in ts allow us to write reusable and flexible code by creating components that can work with a variety of data types. Generics enable you to define functions, classes, and interfaces with placeholders for types, which are specified when the component is used.

// Let say we are to create a identity function that will return whatever data is passed to it , So without generics it would be like this ::

function identity1(arg: number | boolean | string): number | boolean | string {
  // Here accept number and return number
  return arg;
}

// But here above to handle every data type we need to add all data type as union which is bad code practice so instead we can use any to handle all cases

function identity2(arg: any): any {
  return arg;
}

// While using any is certainly generic in that it will cause the function to accept any and all types of arg, But we are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned. Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned and bound function to return only that type value. So this is where generics come ::

function identity3<T>(val: T): T {
  return val;
}

// Here now difference between identity 2 and 3 function is in 2 we have any which means it can accept any type of data value and can return any type of data value so if function accept number value it can return string as well which is not a good idea but in case of function 3 we are actually bounding the type "T" to the function which means it is almost like any and ready to accept any type of value either number , string , boolean etc but whatever type of value it accept it is also bounded to return only that type of value. 

// The type parameter "T" acts as a placeholder for the actual types that will be provided when the function is called and it can be anything <H> ,<Type> ,<U> etc...

identity3(4)
identity3("aman")        // Here now function is handled for every data type value 
identity3(true)

// Since it is generic so we can use this same function for custom data type as well ::

interface User{
    name: string,
    age: number,
    address: string
}

const aman: User = {
    name: "AMAN",
    age: 21,
    address: "1899 Type 2 LBN"
}

identity3<User>(aman)   // Here another way of calling generic function in this way we telling ts in advance about the type of data we are calling this func for 

identity3(aman)   // Even if we dont provide type to ts in advance for custom data type still ts will infer the type based on passed value

// identity3<string>(2)   // error as function supposed to be runned for string value not number
identity3<string>("acey")


// Here behind the scene the array we create are also generic ::

const marks: Array<number> = [1,2,3]
const names: Array<string> = ["aman", "acey", "pratham"]

// As we can see same Array class but with different data type is used hence increase code reusability 
