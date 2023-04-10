// Print a random joke from https://official-joke-api.appspot.com/random_joke
const { default: axios } = require("axios");
const API='https://official-joke-api.appspot.com/random_joke';

 async function getJoke(url){
    const myjokes=await axios.get(url);
    console.log(myjokes.data);
};
getJoke(API);
