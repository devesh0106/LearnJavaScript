//Object Literals : a key:value pair data structure . (eg. JSON)
//Storing variables and functions together in a container . Like evrything you put in school bag(like pencil,books, bottles,etc)
//Creating an Object 

//1st Way
let bioData ={
    myName : "Devesh",
    myAge  : 31,
    getData: function(){
        console.log(bioData.myName,bioData.myAge)
    }

}
bioData.getData();

//2nd Way , no need to write functions as well after ES6(2015)l

let bioData1 ={
    myName : "Anand",
    myAge  : 30,
    getData(){
        console.log(bioData1.myName,bioData1.myAge)
    }

}
bioData1.getData();

let bioData2 ={
    Name : {
        myName : "Anand",
        myFirstName : "Devesh"
    },
    myAge  : 30,
    getData(){
        console.log(bioData2.myName,bioData2.myAge)
    }
}
console.log(bioData2.Name.myFirstName)

// What is "this" Object : It contains the current context 
console.log(this)


// 4️⃣ Destructing in ES6 : is a JS Expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
//=> Array Destructuring
const MyBioData3= ["Anand",'Devesh',31]
let [myLast,myFirst,myAge] = MyBioData3
console.log(myLast)

//=> Object Destructuring
const myBioData4 = {
    myName1 : "Devesh",
    myAge1 : 31
}

let {myName1,myAge1} = myBioData4
console.log (myAge1)

//5️⃣ Object Properties : Can use Dynamic Properties 

let myName5 = "Devesh"
const myBio = {
    [myName5] : " Hello,How are you?",
    [20+6] : "is my age"
}
console.log(myBio)

//6️⃣ Spread Operator :  It lets you add more values in array using ... (Three dots)
let colours = ['red','blue','black','cyan']
let myfavColours = [...colours,'white','grey']
console.log(myfavColours)