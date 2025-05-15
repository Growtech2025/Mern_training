// initialize of let 
let x = 10;
// reinitialize of let
x = 100;

// initialize of var 
var c = 90;
// reinitialize of let
c = 990;

// initialize of const 
const b = 20;
// reinitialize of const is not possible neech vala code error dega ki aap constant variable dubara value de rhe hai
// b=79763;

// if you make any variable with out using let,var and const so those variable become global
// ex dream="s/w engineer"


console.log(x, b, c);

//when you define the variable by the help of let and var it automatically store undefined
let x1;
var y1;
console.log(x1, y1);

// you are not allowed to do this like below
// const z1;


// scope-:Its define the lifetime of the variable jiska matlab mera variable kha tak access hoga
// scope has 3 types -: LocaL/Block scope, Function Scope and Global Scope 

// let and const has local scope but var has global scope 

// age=90;
//this is the example of local scope or block scope
let yy = 100;
{
    let yy = 10;
    // console.log(yy);

    const zz = 78;
    console.log(yy, zz);
    var yu = 67;
}

console.log(yy);

//let and const can not be accessed outside the local/block scope thats why below line give an error
// console.log(yy,zz);

// var has function scope it can access outside the block/local scope
console.log(yu);

// function declaration 
function hamToFunctionHai() {
    let fy = 89;
    const userName = "syam";
    var age = 28;
    // console.log(fy,userName,age);

    {
        let age = 900;
        // you already made username via const so you are not allowed to make variable by same name 
        // var userName="syam";
        const raghav = "Boy"
        var number1 = 786;
        console.log(age);//900

    }
    console.log(age);//28
    console.log(number1);//786
    console.log(raghav);// error 



}
//age defined by var but we know var has function so age is not allowed to access function

// here there is no age varible found.
// console.log(age);
//function calling
hamToFunctionHai()
//  console.log(age);




//for printing anything
// console.log("Hello Js");
// console.log(10);
// console.log(true);
// console.log(undefined);
// console.log(null);
// const name="syam";
// console.log(name);
// let a=10;
// const ab=undefined;
// var c=null;
// console.log(a);
// console.log(ab);
// console.log(c);
// const number1=prompt();
// console.log("Enter number is",number1);
