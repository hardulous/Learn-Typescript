// Enums In Ts => Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases having distinct value. In ts enum is created using 'enum' keyword which provides both numeric and string-based enums and memeber can be accessed just like property of object using . operator. We generally use enums in a case when we want to resrict user's choice out of many options available. EX ::

// 1. NUMERIC ENUM

enum SeatChoice {
   AISLE,     // value is 0
   MIDDLE,    //  1
   WINDOW     //  2
}

// Above, we have a numeric enum where all of the members are auto-incremented from staring point AISLE. In other words, SeatChoice.AISLE has the value 0, MIDDLE has 1, WINDOW has 2

const userSeat = SeatChoice.AISLE    // Here user will have restricted choice out of many available

// We can also create enum constant from any value ::

enum Direction {
    UP = 10,
    DOWN,           // value is 11
    LEFT = 15,
    RIGHT           // value is 16
}

// Here now UP has given default value of 10 and then DOWN will be auto incremented to 11 and again LEFT has given default value of 15 so RIGHT will be auto incremented to 16


// 2. STRING ENUM

enum Football {
    CF = "CENTER FORWARD",
    MF = "MID FIELDER",
    CB = "CENTER BACK"
}

// In a string enum, each member has to be initialized with a string literal, or with another string enum member otherwise it show error because auto incremented will not work with string unlike number

const amanPos = Football.CB

// A enum can also be combination of both number and string enum ::

enum Coord {
    X = 0,
    Y,
    Z = "Z-AXIS",
    W = "W-AXIS"
}

// Here only Y will be auto incremented to 1 and rest have default value as given


// ##### NOTE :  If we go to ts playground and copy paste code of enum we will see that a lot of js code will be created just for a simple constant which is bad and to solve this just create enum using const keyword which will then generate less code for enum and eveything will be still same ::

const enum Answer {
    YES,
    NO
}

const myAns = Answer.YES