//This program changes body color into one from the array colors after clicking click me button. 
//It randomizes color by using getRandomNumber() which generates random between 0 and 1
//and multiplies it by number of array elements.
//After that it rounds it using Math.floor()
const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
