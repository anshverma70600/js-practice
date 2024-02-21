// primitive 
// 7types ==> String, number, boolean, null, undefined, symbol, bigint
// let id = Symbol('1234')
// let id2 = Symbol('1234')
// console.log(id===id2);

//Reference type || Non-primitive
// Array, Object, Functions

const cars = ["tata","maruti","honda"];
const myobj ={
    name : "Tata Tiago",
    age : 1,
}

// console.log(cars);
// console.log(myobj);

//*************************************** Memory ******************************
// 1--> Stack (primitive) ,       2--> Heap (Reference)
let prename = "hello world"
let newname = prename
newname = "hello ansh"
console.log(prename);
console.log(newname);
