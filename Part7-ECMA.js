//9️⃣String

let myName = 'Devesh Anand'
console.log(myName)
let ytName =new String(" Code Blooded ")
console.log(ytName)
console.log(ytName.length)

// 🕙 Escape Characters
let anyLine = "My Name is Anand and I am not a \"Terrorist\" " // Escape Charatcter used before Special Characters
console.log(anyLine)

// 👉There are 3 methods to extract a part of a String
// slice(start, end)            //end is not included
// substring(start,end)
// substr(start,end)

let myStr= "\"Devesh\""
console.log(`Original String is ${myStr} And Sliced Strings are ${myStr.slice(3,6)}`)

//👉There are 3 methods to extract Characters
//charAt(position)              //returns the charatcter of specified index from string 
//charCodeAt(position)          //returns the unicode/ascii of the character at a specified index in a string
//Property access []

//👉trim() removes white spaces
let myTrim= "          Devesh        Anand   "
console.log(myTrim.trim())

//👉 split() : Converts String into Array

let myStr1= new String("Devesh,Anand,Pooja")
console.log(myStr1)

let myStr2="Devesh,Anand,Pooja"
console.log(myStr2.split(","))

