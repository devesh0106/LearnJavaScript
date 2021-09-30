 //Map(),Reduce(),Filter()

// 6️⃣Filter()
 const myArray=[1,4,2,3,22] 
 let newArry=myArray.filter((currElement,index,arr)=>{
     return currElement > 2
 })

 console.log(`New Array using Filter ${newArry}`)

 //7️⃣map() 
 //Returns a new Array containing the results of calling a function on every element in this array

 let newArry1=myArray.map((currElement,index,arr)=>{
     return (currElement > 2)
 })
 console.log(`Original Array ${myArray}`)
 console.log(`New Array using map ${newArry1}`)

//  .forEach({
//     function(elements,index,array) {
//         console.log(elements)
//     } 
//  });

//Diff among Filter, Map and ForEach

//WAP to find square root of array Elements
let arr=[25,36,49,64,81]

let newArr = arr.map((currEle)=>{return Math.sqrt(currEle)})
console.log(newArr)

//WAP to multiply each element by 2 and return only those elements > 10..... Soln : We can use chaining method
let arrNum=[2,3,4,6,8]
let newArrNum=arrNum.map((currE)=>{
    return currE*2
}).filter((curE)=>curE>10);

console.log(`Result is ${newArrNum}`)

//8️⃣ Reduce() : Flatten an array means to convert 3d or 2d array into a Single Dimensional array
// Takes four argument 1. Accumulator,Current Value,Current Index, Source Array

//WAP to find sum using reduce
let arrRed= [2,5,6,1]
let newArrRed= arrRed.reduce((accum,currE,index,arr)=>{
                return accum+=currE
})
console.log(`Sum is ${newArrRed}`)

//WAP to find the sum after multiply each elements by 2 and getting elements > 10

let arrChain =[3,6,10,44,55]
let newArrChain= arrChain.map((arr)=>{ return arr*2}).filter((arr)=>{return arr>10}).reduce((accum,arr)=>{return accum+=arr})
console.log(`Result of Sum using Chain is ${newArrChain}`)
