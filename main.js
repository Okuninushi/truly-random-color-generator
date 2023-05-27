const generateColorButton = document.querySelector(".generate-color-btn");
const body = document.querySelector("body");

function getRandomColor () {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
        
    }
    console.log(color);
    return color;
    
}
generateColorButton.addEventListener("click", function () {
    body.style = `background-color: ${getRandomColor()}`;
})