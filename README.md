# node_learning
This is Node JS Learning Path

What is node JS?
    -> Single Threaded, asyncronus, non-blocking IO 
            Each request assigned to one event, request is completed response will come(call back)
            Event loop mechanisam
            Each request working parallelly
    
    https://www.youtube.com/watch?v=gmOa05H7uiI&feature=youtu.be

What is NPM?
    -> Node package manager
    -> Library(Registry- share and borrow packages) for JavaScript Framework
    -> Adapt packages of code for your apps, or incorporate packages as they are
    -> Download standalone tools you can use right away

package.json
    -> Entry point for application
    -> Conatins metadata (application name, version, description)
    -> Contains scripts(stat, build, test)
    -> packages we are using for the application (dependencies)

Steps to generate the package.json
    $npm init 
Installing  a package
    $npm i <packagename>  / npm install <packagename>
        package-lock.json dependency tree
        node_modules- All downloaded packages are available here
                      ignore node_module while trnsering(.gitignore)
                      $npm install , will install the all depemdencies

Inbuilt packages: require('package name')
                    let os = require('os');  /os - operating system package
                    os.platform(); os.arch();
                    fs---> file system package
                    http ---> server = http.createServer(()=>{});
                                server.listen(7310);


Node js ceates it's own server. Doesn't requie any external agent.
Es5 and Es6
Es5: 
function add(a,b) {
    return a+b;
}

const add = (a,b) => {return a+b};



http = require('http');
let server = http.createServer((req, res) => {
    res.write("<h1>Response from server</h1>");
    res.end();
});
server.listen(7310);

let server = http.createServer(function(req,res){

});

npm start ---> npm run start

run vs start- there is no diference

# local vs dev vs gloabl depemdencies

Local : 
		local to the folder 
		and can be used in that folder
		once istalled, it can be used in that folder only.
			$npm i <packagename>

Dev   : only for development purpose like unit tests
			$ npm i --save-dev <packagename>
		
Global :  installed in system
		  admin acces needed 
		  to start or build the application
			$npm i -g <packagename>
# Nodemon
hrlps to restart the app continuoulsy, after any change

#Express 
		$npm i express
        TO handle/specialise routing		

		let express = require('express');
		let app = express();
		let port = 8888;
		
		app.get("/",(req,res)=>{
			res.send("default route from express");
		})
		
		app.get("/category", (req,res) => {
			res.send("ctegory rout");
		})
		
		app.listen(port, (err)=> {
			if(err)
				throw error;
			console.log("Running on port: 8888");
			console.log("Running on port:" + port);
			console.log(`Runnning on ${port}`);
		})
		
		
# Express Router
		let express = require('express');
		let app = express();
		
		let categoryRouter = express.Routee();
		categoryRouter.route("/")
			.get((rea,res)=> {
				res.send("category default router");
			);
		categoryRouter.route("/details)
			.get((req,res)=> {
				res.send("category details router");
			});
		
		
		app.use("/category", categoryRouter);
		
		
		$npm install morgon
		$npm install dotenv
		
		let morgon = require('morgon');
		let dotenv = requite('dotenv');
		let fs = require('fs);
		
		dotenv.cinfig();
		app.use(morgan('common', file stream));
		
		let categoryRouter = require("./src/controller/categoryRouter");
		module.exports = categoryRouter;
		
		
#Passing data to Router
		let dvs = [];
		let dvRouter = require("dvRouter.js")(dvs);
		
		
		let dvRouter = express.Router();
		function router(dvs) {
			dvRouter.rout("/")
				.get(function(req,res) => {
					res.send(dvs);
				});
			return dvRouter;
		}
		
		module.export = router;		
		
		
#Ejs 
		Template engine for UI















