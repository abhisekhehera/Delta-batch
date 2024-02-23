let inp = document.createElement('input');
let button = document.createElement('button');


button.innerText = "Click me";

document.querySelector("body").append(inp);
document.querySelector("body").append(button);

inp.setAttribute("placeholder", "username")
button.setAttribute("id", "btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1)
h1.classList.add("h1");

let para3 = document.createElement("p");
para3.innerHTML = "Apna College <b> Delta </b> Practice";

document.querySelector("body").append(para3);


