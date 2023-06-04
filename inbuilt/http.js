let http = require('http');
let server = http.createServer((req, res) => {
    res.write("<h1>Response from server with  testing nodeman</h1>");
    res.end();
});
server.listen(7310);