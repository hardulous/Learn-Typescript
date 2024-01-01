// Interface In Ts => Interface is a way to define a contract for objects. It allows you to specify the structure of an object, including the types of its properties and methods, without providing an actual implementation. Interfaces are often used to enforce a specific shape or structure for objects in your code. Let say we are creating a user and this user has email , userId , googleLogin() etc.. so it means a user object must look something like this we dont know what value and methods of user will do all we care about is that every user must consist of this properties and methods so for this we use interface , EX ::

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;                // Here overview of function that returns a string
  endTrial(): string;                      // other way of defining function overview
  getCoupon(couponName: string): number;   // overview of function that accept parameter as well
}

const aman: User = {
  dbId: 111,
  email: "aman@gmail.com",
  userId: 10,
  startTrial: () => {
    return "Starting trial version";
  },
  endTrial: () => {
    return "Ending trial version";
  },
  getCoupon() {       // Here even if we are not passing parameter couponName still ts not throwing error 
    return 100;
  },
};

aman.email = "@mail.com"; // Can change no error
// aman.dbId = 23                           // error as dbId is readOnly
console.log(aman.googleId?.toUpperCase()); // as googleId is optional so not confirmed wheather it exist or not
console.log(aman.startTrial());
console.log(aman.endTrial());

// So overall interface is like an operating system just like operating system is interface for the hardware it does not tell you what happend behind the scene when we click on mouse button but rather tell you only about end result like we we double click on mouse it opens a folder but how it opens the folder what method it executes we does not care about it. 