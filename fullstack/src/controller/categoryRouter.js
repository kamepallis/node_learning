let express = require('express');
let categoryRouter = express.Router();

const {getData} = require('./dbController');

let category = [
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]

categoryRouter.route("/")
    .get(async(req, res)=>{
        //res.send(category);
        let query = {};
            let data = await getData('catgeory',query);4
            res.send(data);
    });

categoryRouter.route("/details")
    .get((req,res)=> {
        res.send("Category details router");
    });


module.exports = categoryRouter;