let express = require('express');
let app = express();
let port = 8888;

//Router
app.get("/",(req,res)=>{
    res.send("default route from express");
})


app.get("/category", (req,res) => {
    res.send("ctegory rout");
})

app.get("/details", (req,res) => {
    res.send("ctegory details rout");
})

app.get("/product", (req,res) => {
    res.send("product rout");
})

app.get("/details", (req,res) => {
    res.send("product details rout");
})

//creating server
app.listen(port, (err)=> {
    if(err)
        throw error;
    console.log("Running on port: 8888");
    console.log("Running on port:" + port);
    console.log(`Runnning on ${port}`);
})