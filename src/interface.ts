//*------------------- TYPE vs INTERFACE -------------------

//* object type

// "type" is used to define the structure (shape) of data
type User = {
    name: string;
    age: number;
};

// "interface" also defines the structure, but it only works for object-like types
// (object, array, function)
interface IUser {
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | 'user';
};

// Combine two types together using "&" (intersection)
type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
}

const user1: IUserWithRole = {
    name: "Mr. Elon",
    age: 50,
    role: 'user',
};

const user2: IUser = {
    name: "Mr, Billion",
    age: 60,
}

// Define a simple type alias for boolean
type IsAdmin = boolean;

const isAdmin: IsAdmin = true;


//* function type

// "type" can also describe a function structure
type Add = (x: number, y: number) => number;

// "interface" can also describe a function signature
interface IAdd {
    (x: number, y: number): number;
}

const add: IAdd = (x, y) => x + y;


//* array types

// "type" for an array of strings
type Frinds = string[];

// "interface" for an array, using index signature
// index must be a number, and value must be a string
interface IFriends {
    [index: number]: string;
}

const friend: IFriends = ['A', 'B', 'C'];