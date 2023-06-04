let express = require("express");
let productRouter = express.Router();

productRouter.route("/")
    .get(function(req,res){
        res.send("Product default router");
    });

productRouter.route("/details")
    .get(function(req,res){
        res.send("Product details router");
    });

module.exports = productRouter;