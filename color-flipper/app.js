const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 and 3
    const randomNumber = getRandomNmber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
})

function getRandomNmber(){
    return Math.floor(Math.random()*colors.length);
}