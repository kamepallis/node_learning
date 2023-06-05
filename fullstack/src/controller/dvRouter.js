let express = require("express");

let dvRouter = express.Router();

function router(dvs) {
    dvRouter.route("/")
    .get((req,res) => {
        //res.send("Deault DV Router");
        res.send(dvs);
    });
    return dvRouter;
}
module.exports = router;