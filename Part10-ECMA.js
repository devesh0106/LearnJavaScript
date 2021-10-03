//Windows vs DOM : Window is the main container or we can say the global object and any operation related to entire browser window can be a part of window object
//DOM is the child of window object . So url is the part of window not DOM

// Few HTML Event
// -> Webpage Loading : window.load 
// -> Input field Change 
// -> Button is clicked 
// And JS executes code when Events are Detected

// //💗 4 ways of writing Events in JS
// 1️⃣using events alert()
// 2️⃣By calling a function
// 3️⃣using inline events(HTML onclick=" " property) ///follows top to bottom approach and overrides top if bottom has same events being called
// 4️⃣using Event Listener (addEventListener)  //same events can be called again

//3 onclick
const thirdway= document.getElementById('thirdway');

thirdway.onclick = function(){
    alert('most common way of writing functions again');
}

//4th way of writing function
const fourthWay = document.querySelector('#fourthWay');
fourthWay.addEventListener('click',() => {
    alert('I love this way of writing functions')
})

