//5️⃣ Arrays in JS

var myArray=["Devesh","Pooja",30];
console.log(`Arrays elements are ${myArray}`)

//for Loop , for in loop, for of loop
for(let i=0;i<myArray.length;i++){
    console.log(`${myArray[i]}`)
}

//Using For in Loop
for(let i in myArray){
    console.log(`Using For in Loop ${i}`) //prints only index
}


//Using For of Loop
for(let i of myArray){
    console.log(`Using For of Loop ${i}`) ////prints only Elements
}

//forEach() //calls a function for each of elements in the array

myArray.forEach(function(elements, index, array){
    console.log(elements)
});


//push() is used to add elements at the last in an array
myArray.push("Anand","Sharma");
myArray.forEach(function(elem,ind,arr){
    console.log("Using push methos",elem)
});


//unshift() is used to add in the beginning in an array

var myNum=[2,1,20,14]
console.log(`New Numbers are ${myNum}`)
//using unshift()
myNum.unshift(40,22)
console.log(`New Numbers using UNSHIFT are ${myNum}`)

//sort
myNum.sort()
console.log(`New Numbers using SORT are ${myNum}`)

//splice() method

// Need to Perform following using only one method
// 1. Add Dec at the end of an array
// 2. What is the return value of splice method
// 3. update Mar to March
// 4. Delete Apr

const months=['Jan','Feb','Mar','Apr','May']
const newMonths =months.splice(5,0,"Dec") //splice variable shows only deleted elements
console.log(months) // soln1

console.log(newMonths) //soln2 Emply Array

const updateMonth =months.splice(2,1,"March")
console.log(updateMonth)
console.log(months) // soln3 

const indexOfMonth = months.indexOf("Apr") //soln4
if(indexOfMonth !=-1){
    const delMonth = months.splice(indexOfMonth,1)
    console.log(months)
}else{
    console.log("No Data is found to delete")
}