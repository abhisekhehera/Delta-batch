let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    item.appendChild(delBtn);
    delBtn.classList.add(".delete");

});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})



