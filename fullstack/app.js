let express = require('express');
let app = express();

let dvs = [
    {
        "dvId" : "1",
        "dvDefId" : "episodeDescSh",
        "dvName" :" Episode Desc Short"
    },
    {
        "dvId" : "2",
        "dvDefId" : "seriesDescSh",
        "dvName" :" Series Desc Short"
    },
    {
        "dvId" : "3",
        "dvDefId" : "showDescSh",
        "dvName" : "Show Desc Short"
    }
]

let categoryRouter = require("./src/controller/categoryRouter");
let productRouter = require("./src/controller/productRouter");
let dvRouter = require("./src/controller/dvRouter")(dvs);

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
app.use("/dvs", dvRouter);

//creating server
app.listen(port, (err)=> {
    if(err)
        throw error;
    console.log("Running on port:" + port);
    console.log(`Runnning on ${port}`);
})