//Promises : You get either success or fail . We will use Fetch API to call API and return promise
/*  
90% promise is consumed.
*/
const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')
const setHeader ={
    headers : {
        Accept : "application/json"
    }
}
const generateJokes = ()=> {
fetch('https://icanhazdadjoke.com/',setHeader)
.then((res)=>(res.json())
.then((data) =>{
jokes.innerHTML =data.joke
}).catch((error)=>console.log(error) 
}

jokeBtn.addEventListener('click', generateJokes)
generateJokes();