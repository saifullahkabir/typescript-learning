//* keyof : type operator

// keyof means → get all keys of an object type as a union of string literals.
type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "car";

// key of constraint

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 222,
    name: 'Rana',
    address: {
        city: "Chittagong",
    }
}

// const myId = user.id;   // Dot notation
const myId = user["id"];  // Bracket notation
const myName = user['name']
const address = user['address'];

//* Generic function with keyof constraint

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result = getPropertyFromObj(user, 'name');

const product = {
    brand: "HP"
}

const result2 = getPropertyFromObj(product, "brand");


