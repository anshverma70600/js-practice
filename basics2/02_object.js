//********************** Object made from Literals **************************
//   Non - Singleton 

const mySym = Symbol("Yes my name is ansh")
const myobj = {
    name : "ANSH",
    [mySym] : "Correct",
    age : 15,
    email : "jashkfkubf@gmail.com",
    city : "Noida"
}

// console.log(myobj);
// console.log(typeof myobj["age"]);

// const arr = [1,[2,3],[[4,5],6,7],8,9];
// console.log(arr.flat(Infinity));

//********************** Object made from Constructor **************************
//     Singleton 
//const car = new Object()
const o1 = {1:'a',2:'b'}
const o2 = {3:'c',4:'d'}
const o3 = Object.assign({},o1,o2)
console.log(o3);  