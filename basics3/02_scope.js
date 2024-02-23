var c = 299  //global scope 
if (true){
    let a = 2 //block scope
    const b = 3
    c = 388
}
// console.log(c);

function one(){
    const name = "ANSH"
    function two(){
        const website = "linkedIn"
        console.log(name);
    }
    // console.log(website);
    two()
}
one()