const
    express = require("express");
let app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/hello", (req, res) => {
    res.send("Hello world");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("instagram", { data });
});



app.listen(port, () => {
    console.log(`The port is ${port}`);
});


