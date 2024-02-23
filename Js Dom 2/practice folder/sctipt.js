// let btn = document.createElement("button");

// btn.innerText = "Hover me";
// document.querySelector("body").append(btn);

// btn.addEventListener("mouseout", function (event) {
//     btn.style.backgroundColor = "red";
// })

// let inp = document.createElement("input");
// document.querySelector("body").append(inp);

// inp.setAttribute("placeholder", "Enter Your Name");

// inp.addEventListener("keypress", function (event) {
//     alert("Key pressed",);
// })
// let body = document.querySelector("body");
// window.addEventListener("scroll", function (event) {
//     alert("event fired");
// });

// let btns = document.createElement("button");
// btns.innerText = "change color";

// document.querySelector("body").append(btns);

// btns.addEventListener("click", function (event) {
//     // btns.style.backgroundColor = "green";

//     btns.classList.add("btns");

// })


let h2 = document.createElement("h2");
h2.innerText = "Heading";
document.querySelector("body").append(h2)
h2.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
let input2 = document.createElement("input");
input2.placeholder = "Enter your name";
document.querySelector("body").append(input2);

input2.addEventListener("beforeinput", function (event) {
    /^[A-Za-z ]+$/.test(event.data) || event.preventDefault()
    h2.innerText = input2.value;
});




























