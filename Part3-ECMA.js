//Modern JavaScript started from 2015 and Known as ES6/ECMAscript 6

// 1️⃣ LET vs Const vs Var 
// Var => Function Scope ; Let and Const => Block Scope  ; Values of Const Variable is unchanged

//Using Var
function bioData(){
var myName= "Devesh"
console.log(myName)

if(true)
{
    var lastName = "Anand"
    console.log("Inner",lastName)
}
console.log("outer",lastName)
}

bioData()

//Using Let 
function bioData(){
    let myName= " Let Devesh"
    console.log(myName)
    
    if(true)
    {
        let lastName = "Let Anand"
        console.log(" Let Inner",lastName)
    }
    console.log("Let outer",lastName)
    }
    
    bioData()