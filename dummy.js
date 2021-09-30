alert("Hi Devesh");
document.write("<h2>First Line of JavaScript</h2>");
document.writeln(prompt("Enter your Name"));
document.writeln(confirm("Would you Like to Exit?"));
//document.getElementById("my-content").innerHTML ="this is dynamic content";

//Sum of Numbers
var a=3 
var b=5
document.write("Sum = "+(a+b));

//Display using For Loop
for( var i=1;i<=10;i++){
    document.write("<h3>Hello Pooja || ",i*i,"</h3>");
}

//Sum of Number using For loop
let result=0;
let n=prompt("Enter Number")
for(let i=1;i<=n;i++){
     result = result+i;
}
document.write("Final Sum is ",result,"<br><hr>");

//Array
let myArray= [2,1,4,5]
for(let i=0;i<myArray.length;i++){
    document.writeln("Dispalying of Elements of array are = ",myArray[i],"<br>")
}

//Function
function sayHello()
{
    document.write("Hello Pooja","<br>")
}

sayHello()

//Function to multiply
function mulNumbers(a,b){
    let mul= a*b
    document.write("Multiplied Result is ",mul)
}

mulNumbers(2,3)
