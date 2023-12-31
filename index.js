const container = document.getElementById("container");
const sizeButton = document.getElementById("sizeButton");

function createDivs(num = 16) {
    for (let i = 0; i < (num * num); i++){
        const div = document.createElement("div");
        const divWidth = `${600 / num}px`;
        const divHeight = `${600 / num}px`;
        div.style.width = divWidth;
        div.style.height = divHeight;     
        div.setAttribute("class", "smallbox");
        container.appendChild(div);
        }         
        boxDraw();

}
createDivs();

sizeButton.addEventListener ("click", () => {
    let size = +prompt("What size do you want? example = 64x64 (max is 64)", 64);
    if (size > 64){
        alert("The number is more than 64!"); return false
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        createDivs(size);
    }
    
})

const blackColorButton = document.getElementById("blackColorButton");
const randomColorButton = document.getElementById("randomColorButton");
const eraserButton = document.getElementById("eraserButton");
const resetButton = document.getElementById("resetButton")
let currentColor = "black";

blackColorButton.addEventListener("click", () => currentColor = "black");
randomColorButton.addEventListener("click", () => currentColor = "random")
eraserButton.addEventListener("click", () => currentColor = "white" )
resetButton.addEventListener("click", function() {
    const childNodesLength = container.childNodes.length;
    const squareRoot = Math.sqrt(childNodesLength);
    while (container.firstChild) {
        container.removeChild(container.firstChild)
      };
      createDivs(squareRoot);
})

// console.log(Math.sqrt(container.childNodes.length))
function boxDraw(){
    const boxes = container.childNodes;
    for (let i = 0; i < boxes.length; i++){
    let box = boxes[i];
    box.addEventListener("mouseover",  function (){
    if (currentColor === "black"){
        box.style.backgroundColor = "black";
    } else if (currentColor === "random") {
        box.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    } else {
        box.style.backgroundColor = "white"
    }
})
}
}


