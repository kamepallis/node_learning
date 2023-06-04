let express = require('express');
let app = express();
let port = 8888;

let categoryRouter = express.Router();
let productRouter = express.Router();

//Router
app.get("/",(req,res)=>{
    res.send("default route from express");
})


categoryRouter.route("/")
    .get(function(req,res) {
        res.send("category default");
    });

categoryRouter.route("/details")
    .get(function(req,res){
        res.send("category details route");
    });


productRouter.route("/")
    .get((req,res)=> {
        res.send("Product default route");
    })

productRouter.route("/details")
    .get((req,res)=> {
        res.send("Product details route");
    })


app.use("/category", categoryRouter);
app.use("/product", productRouter);

//creating server
app.listen(port, (err)=> {
    if(err)
        throw error;
    console.log("Running on port:" + port);
    console.log(`Runnning on ${port}`);
})