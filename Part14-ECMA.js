//Advanced JavaScript
/* Event Propagation : Determines in which order the elements receive the event.
=>Capture Phase moves down from top to bottom DOM.
=>Bubble Phase moves top from button to Window

Event Bubbling : The Event is first captures and handled by the innermost element and then propagated to outer elements

*/

/* 
Hoisting in JS is a mechanism where variables and Functions declarations are moved to the top of their scope before the code execute
eg;
console.log(myName);
var myName;
myName ="Thapa"; 
*/

/* 
Scope Chain : is used to resolve the value of variable names in JS
and 
Lexical Scoping 
*/

/* 
Closures in JS : A Closure is the combination of a function bundled together(enclosed) with references to its surrouding state.
In Short, It gives u access to the outer function's scope from an inner function. Its created everytime a function is created at creation time of function.
*/

/* 
Use Strict
*/

//eg ;
x="value"
console.log(x) //No Error on compilation

"use strict"

y="value" 
console.log(y) //Throws Error

/* 
Synchronous : Another Thread will not execute until 1st Thread is completed. 1 at a Time
Asynchronous : No need to wait. All at a Time
*/
//Eg of Asynchronous

const func2= ()=>{
    setTimeout(() => {
        console.log("Function 2️⃣ is called")
    }, 2000);
}

const func1= () =>{
    console.log("Function 1️⃣ is called")
    func2()
    console.log("Function 1️⃣ is called again")
}

func1()

/* 
Event Loop : It is the state where asynchronous method such as setTimeout() goes from Execution Stack to Message Queue till the wait time and then again back to Execution Stack.
*/

/*  Function Currying : is a technique of evaluating function with multiple argument
eg; Output of sum(5)(3)(8)
*/
function sum(num1){
    return function(num2){
        return function(num3){
            console.log(num1+num2+num3)
        }
    }
}
sum(5)(3)(8);

const summation= (num4)=>(num5)=>(num6)=> console.log(num4+num5+num6)
summation(15)(13)(18);

