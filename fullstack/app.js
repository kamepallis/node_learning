let express = require('express');
let app = express();

let categoryRouter = require("./src/controller/categoryRouter");
let productRouter = require("./src/controller/productRouter");

let morgan = require('morgan');
let fs = require('fs');
let dotenv = require('dotenv');
dotenv.config();

let port = process.env.PORT || 9101;

//Router
app.get("/",(req,res)=>{
    res.send("default route from express");
})

app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}));

app.use("/category", categoryRouter);
app.use("/product", productRouter);

//creating server
app.listen(port, (err)=> {
    if(err)
        throw error;
    console.log("Running on port:" + port);
    console.log(`Runnning on ${port}`);
})