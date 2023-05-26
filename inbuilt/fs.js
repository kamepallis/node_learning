let fs = require('fs');

// fs.writeFile("mycode.txt", "File contetnt", function(){
//     console.log("File created successfully");
// })

fs.appendFile("mycode.txt", "appended text", function(){});

fs.readFile("mycode.txt", 'utf-8', function(err, data){
    console.log(data);
});