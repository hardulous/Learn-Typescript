// CLASSES IN TS => Here classes in ts is very much similar to one in js but in ts whatever data members the class have need to be defined with their type at compile time else ts will throw error.

class User {
  email: string;
  name = "spider man"; // Just like with variable, the initializer of a class property will be used to infer its type:
  city: string = "Delhi"; // Default value of property if not initlized
  readonly country: string = "INDIA";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const aman = new User("2@m.com", "Aman Bisht");

// aman.name = 23    // error as name property is of type string
aman.name = "AMU";
aman.city = "Mumbai";
// aman.country = "America"   // error can not change readOnly proeprty

// ACCESS MODIFIERS IN CLASSES IN TS => Access modifiers allow us to control whether certain methods or properties of class are visible to code outside the class or not. Ex Public , Private and Protected. EX ::

// 1. Public => The default visibility of all class members is public. A public member can be accessed anywhere

// 2. Private => Private members are accessible only within the same class , Other way of declaring private memeber is using '#' symbol

// 3. Protected => Protected members are accessible to only base class in which they are defined and to sub classes which inherit this class.

class Person {
  public name: string; // Even if we dont write public keyword still name is public
  private id: number;
  #gender: string; // It is also private member

  constructor(name: string, gender: string) {
    this.name = name;
    this.#gender = gender;
    this.id = Math.random();
  }
}

let p1: Person = new Person("aman", "male");

console.log(p1.name);
// console.log(p1.id)            // Can not access both id and gender cuz both are private variable
// console.log(p1.gender)

// Now other way of creating class which is more professional way ::

class Animal {
  readonly type = "Carnivorus";

  constructor(
    public name: string, // More professional way of writing class automatically add access modifier as well
    private species: string,
    protected speed: number
  ) {
    this.name = name;
    this.species = species;
    this.speed = speed;
  }
}

// GETTERS AND SETTERS => Getters and setters are special methods that allow you to control access to the properties of a class moslty used to access private and protected member outside the class with some additional logic and restirction. A getter is a special method that is used to retrieve the value of a property. It is defined using the get keyword followed by the property name. A setter is a special method that is used to set the value of a property. It is defined using the set keyword followed by the property name. This getter and setter eventhough are function but are used in property way EX ::

/*

TypeScript has some special inference rules for getter and setter:

1. If getter exists but no setter, the property is automatically readonly
2. If the type of the setter parameter is not specified, it is inferred from the return type of the getter
3. Getters and setters must have the same Member Visibility
4. A setter cannot have a return type annotation because the role of setter is not to return any value but just modify the value of property 

*/

class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
    this.greet()
  }

  // Getter for the radius property
  get radius(): number {
    return this._radius;
  }

  // Setter for the radius property
  set radius(value: number) {
    if (value >= 0) {
      this._radius = value;
    } else {
      console.error("Radius cannot be negative.");
    }
  }

  // Just like property we can define access modifier for method as well
  private greet(){
    console.log("Hello My Friend")
  }

}

const myCircle = new Circle(5);


myCircle.radius = 10;          // Modifying the radius using the setter  

console.log(myCircle.radius);  // Accessing the radius using the getter

// Attempting to set a negative radius (will print an error message)
myCircle.radius = -5;

// myCircle.greet()   // Here private method can not be accessed outside the class

class Game {

    protected type: string

    Greet(){
        return this.type    // Protected member are accessible only base class and sub class
    }

}

class Football extends Game{

   NoOfPlayers: number
   Time: number 

   getType(){
    return this.type    // Here protected member type of base class Game is accessible from sub class as well
   }

}

const g1 = new Football()

g1.getType()  // Accessing protected member
// g1.type    // error can not directly access protected member outside the class 
