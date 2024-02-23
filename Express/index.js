const express = require("express");

const app = express();

// console.log(app);


let port = 3000;
app.listen(port, () => {
    console.log(`DB connected to ${port} port  `);
});

let code = "<h1> This is a heading </h1> <ul> <li>Abhisekh</li> <li>Santosh</li> </ul>";

// app.use((req, res) => {
//     console.log("request received");
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("You connected to the root forlder")
})

app.get("/contact", (req, res) => {
    res.send("You connected to the contact forlder")
})

app.get("/help", (req, res) => {
    res.send("You connected to the help forlder")
})

app.post("/", (req, res) => {
    res.send("you send post request to the server")
})

