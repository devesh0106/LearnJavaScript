// 2️⃣ Template Literals/String
// To get rid of Concatenation , TL is used

for(let i=1;i<=10;i++)
{
    let tableOf =12;
    //console.log(tableOf + "*" + i + "=" + (tableOf*i)) //Concatnated using +
    console.log(`${tableOf} * ${i} = ${tableOf*i}`) //Using back Tick ` and ${}
}

//3️⃣Default Parameters allow named parameter to intialiase with default values
function mul(a,b=5){
    return a*b
}
console.log(mul(5))

// 4️⃣ Fat Arrow Function 

// ✋ Normal way of writing Function as written in 3️⃣ 

// 🤚 Convert into Arrow Function

const mult = () => {let a=3,b=6 ;return a*b;}
console.log(mult())
