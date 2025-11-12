// mapped type

// map example with normal array
// array of numbers:
const arrayOfNum: number[] = [1, 2, 3, 4];

const arrayOfStr: string[] = ['1', '2', '3', '4'];

// convert each number to string using .map()
const arrayOfStrUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStrUsingMap);

type AreaOfNum = {
    length: number;
    width: number;
};

type length = AreaOfNum['length']

// type AreaOfStr = {
//     length: string;
//     width: string;
// }


// mapped type: loop over each key ('length' and 'width')
// and assign string as their value type
type AreaOfString = {
    [key in 'length' | 'width']: string;
}

//* generic mapped type

// keyof T → gets all keys from T
// T[key] → gets the value type for each key
// so this keeps the same key-value structure as the input type
type Area<T> = {
    [key in keyof T]: T[key];
};


const area1: Area<{length: string, width:number}>= {
    length: '30',
    width: 30
}


//* remember: 
// Concept	Explanation:
// map() ==>  Array-এর প্রতিটি element-এ কাজ করে নতুন array দেয়
// keyof ==>  কোনো object type-এর সব key গুলো বের করে
// [key in keyof T] ==>  object type-এর প্রতিটি key-এর উপর loop চালায়
// T[key] ==>  ঐ key-এর value type নেয়