//* conditional type

type A = null;
type B = undefined;

//* Check conditions using ternary (conditional type)
// 1. If A extends number => return true
// 2. Else if B extends undefined => return true
// 3. Otherwise => return false
type C = A extends number ? true : B extends undefined ? true : false;

//* Example 2: Conditional type with keyof
type RichPeoplesVehicle = {
    bike: string;
    car: string;
    helicopter: string;
}

//* Here we check: 
// If T is one of the keys of RichPeoplesVehicle (bike | car | helicopter)
// then return true, otherwise false.

// type CheckVehicle<T> = T extends 'bike' | 'car' | 'helicopter' ? true : false;
type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = CheckVehicle<"bike">;