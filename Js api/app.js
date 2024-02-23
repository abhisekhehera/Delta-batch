let url = "https://catfact.ninja/fact";

async function getjocks() {
    try {

        let res = await fetch(url);
        let data = await res.json()
        return data.fact;
    } catch (error) {
        console.log("Error = ", error);
    }
}

let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click", async function () {

    try {
        let jock = await getjocks();
        h2.innerText = jock;

    } catch (error) {
        console.log("Error =>", error);
    }
})



