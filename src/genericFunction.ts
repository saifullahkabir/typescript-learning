//* Generic Function

//* Every function here can take only one fixed type
// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number; name: string}) => {
//     return [value];
// }

// const arrString = createArrayWithString('Apple');
// const arrNumber = createArrayWithNumber(123);
// const arrObject = createArrayWithUserObj({id: 123, name:'Rana'});

//* generic type - make it dynamic and reusable
// <T> means Type will be dynamic (decided when function is called)

const createArrayWithGeneric = <T>(value: T) => {
    return [value];
};

const arrString = createArrayWithGeneric('Apple');
const arrNumber = createArrayWithGeneric(222);
const arrObject = createArrayWithGeneric({ id: 123, name: 'Rana' });



//* tuple
// Generic tuple function (can take any type for both params)
// <X, Y> means first param type = X, second param type = Y
const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createArrayTupleWithGeneric("Rana", true);
const res2 = createArrayTupleWithGeneric(22, { name: 'Rana' })



const addStudentToCourse =<T> (studentInfo: T) => {
    return {course: 'Next Level', ...studentInfo};
}

const student1 = {
    id: 123,
    name: 'Rana',
    hasPen: true,
};

const student2 = {
    id: 124,
    name: "Elon",
    hasCar: true,
    isMarried: true,
};

const result = addStudentToCourse(student2)
console.log(result);
