// either or (union types)
let numOrStr: number | string | boolean;
numOrStr = 1; // fine 
numOrStr = "1"; // also fine 
numOrStr = false; // <-- not good

// intersection
interface IKeyObj {
    key: number
};

interface IValueObj {
    value: string
}

let nameValue: IKeyObj & IValueObj = {key: 0, value: ""};
nameValue.key = 1;
nameValue.value = "test";
//nameValue.foo = "bar";

let notPossible: number & string;
// now I can't assign anything! 
// notPossible = 1;

// custom types
type KeyValuePair = IKeyObj & IValueObj;
let entry: KeyValuePair = {key: 1, value: "foo"};
// entry = { id: 6 }; 

// spread operator 
let obj = {
        foo: 'bar',
        x: 0
    },
    obj_copy = obj,
    obj_real_copy = {...obj};

console.log(`copy is ${obj_copy.x}`);
console.log('changing source object 0->1');
obj.x = 1; // changed this on the source, not the copy 
console.log(`copy is ${obj_copy.x}`);

console.log('...');

console.log(`real copy is ${obj_real_copy.x}`);
console.log('changing source object 1->5');
obj.x = 5;
console.log(`real copy is still ${obj_real_copy.x}`);

console.log('...');

// array 
let arr = [1, 2, 3],
    assignment_of_arr = arr,
    copy_of_arr = [...arr];
arr.pop();
console.log(`array assigned after popping an element: ${assignment_of_arr}`);
console.log(`array copy after popping an element: ${copy_of_arr}`);

console.log('...');
