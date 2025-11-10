//* Type Alias Example in TypeScript
//* Type Alias is used to give a custom name to a type structure 


// Step 1: Create a type alias for a complex object structure
type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female',  // union type (only two allowed values)
    contactNo: string,
    address: {
        division: string,
        city: string,
    },
}

// Step 2: Use the 'User' type for multiple objects
// This helps to keep the structure consistent and reusable

const user1: User = {

    id: 123,
    name: {
        firstName: "Saifullah",
        lastName: "Kabir",
    },
    gender: 'male',
    contactNo: '01718784517',
    address: {
        division: "Chittagong",
        city: "Chittagong"
    }
}

const user2: User = {

    id: 124,
    name: {
        firstName: "Saifa",
        lastName: "Saif",
    },
    gender: 'female',
    contactNo: '01818784517',
    address: {
        division: "Dhaka",
        city: "Dhaka"
    }
}


//* type alias for function 

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;