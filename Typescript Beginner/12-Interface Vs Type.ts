// INTERFACE VS TYPES ALIASES => Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable and can be re-opened.

interface User {
  name: string;
  age: number;
  googId: string;
  startLogin(): string;
}

// Let say i want to add new proeprty to this User interface so we can re-open this interface again ::
interface User {
  gitHubId: string;
}

const user1: User = {
  name: " Aman",
  age: 21,
  gitHubId: "ad123", // New property is added
  googId: "2s232",
  startLogin() {
    return "Logging in..";
  },
};

// But here type aliases can not be changed once created

type Person = {
  name: string;
};

// type Person = {            // Throw error of dublicate type
//     age: 23
// }

// Interface can be extended as well , Here we have created a interface for user object but now i want to use this same interface with one extra property inside it so for this we will inherit from User interface using 'extends' keyword ::

interface Admin extends User {
  // Here now Admin interface will contain all features of User interface as well
  isAdmin: boolean;
  adminId: number;
}

// After extends we can add multiple interface , extends interface 1 , interface 2, interface 3

const admin: Admin = {
  name: "Amu",
  age: 32,
  adminId: 2323,
  gitHubId: "sds22",
  googId: "23dd",
  isAdmin: true,
  startLogin() {
    return "Loggin In...";
  },
};

// But when comes to type aliases it can be extended using intersection only '&' ::

type Animal = {
  name: string;
  run(): string
};

type Bear = Animal & {     // Here Bear type contain both its own and Animal features
  honey: boolean;
};

const balu: Bear = {
    name: 'Bhalu Bear',
    honey: true,
    run() {
        return 'Run....'
    },
}
