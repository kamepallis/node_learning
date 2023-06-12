let express = require("express");
let request = require("request");
let port = process.env.port || 8181;
let app = express();


app.get('/weather',(req,res) => {
    let city = req.query.city?req.query.city:'Delhi';
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    request(url,(err,response)=> {
        if(err)
            throw err;
        const output = JSON.parse(response.body);
        res.send(output);
    });
   
});

app.listen(port,(err)=> {
    if(err)
        throw err;
    console.log(`listening on prt ${port}`);
});