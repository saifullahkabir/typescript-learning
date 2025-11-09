//* type alias

type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string,
        city: string,
    },
}

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