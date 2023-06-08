let express = require("express");
let productRouter = express.Router();
const {getData} = require('./dbController');

productRouter.route("/")
    .get(async (req,res) => {
        //res.send("Product default router");
        let query = {};
        let products = await getData('products',query);
        res.send(prducts);
    });

productRouter.route("/details")
    .get(function(req,res){
        res.send("Product details router");
    });

    productRouter.route('/category/:id')
        .get(async function(req,res){
            let id = req.params.id;
            let query = {"category_id":Number(id)};
            let products = await getData('products',query)
            res.render('products',{title:'Products Page',products,menu})
        })

module.exports = productRouter;