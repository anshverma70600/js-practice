function myName(){
console.log("A");
console.log("n");
console.log("s");
console.log("h");
}

// myName()
function add(a,b){ //parameters
    return a+b
}
//console.log(add(3,9)); //arguments

function user(name){
    return `${name} just login`
}
//console.log(user("Ansh"));

function cart(v1,v2,...n1){
    return v1,v2,n1
}
console.log(cart(2,3,45,5,7,85,34,43,5,6));