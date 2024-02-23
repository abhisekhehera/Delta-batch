const express = require("express");
const app = express();
const port = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Request GET sended ! Welcome ${user}`);
})

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Request POST sended ! Welcome ${user}`);
})




app.listen(port, () => {
    console.log(`Server started at ${port}`);
})