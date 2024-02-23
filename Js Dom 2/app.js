let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let randomColor = generateRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    let body = document.querySelector("body");
    body.style.backgroundColor = randomColor;

})

function generateRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green} , ${blue})`
    return color;
}
