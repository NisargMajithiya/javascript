// primitive 7

//    string, Number, boolean, null, undefined, symbol, Bigint 


const score = false 

// Reference / non-primitive datatype

// Array, objects, Functions 

const scorevalue = 100.3

const isloggedin = false
const outsideTemp = null 
let userEmail = undefined;

const Id = Symbol('123')

const anotherId = Symbol('123')

//console.log(Id === anotherId);

const bignumber = 124523652485454125258n

//console.log(typeof(bignumber));


const heros =  ["shaktiman", "naagraj", "doga"]

let myobj = {
    name : "nisarg",
    age : 20,
}


const myfunction  = function(){

    console.log("hello world");

}

console.log(typeof(myfunction));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive) , heap (non-primitive)


let myyoutubename = "nisargmajithiya.com"

let anothernamne = "chaiaurcode"

console.log(myyoutubename);

console.log(anothernamne);




let userone = {

    email : "user@google.com",
    upi : "frdgef"
}

let usertwo = userone

usertwo.email = "nisarg@gmail.com"


console.log(userone.email);
console.log(usertwo.email);



