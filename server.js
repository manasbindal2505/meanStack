// Requiring packages
var express         =require("express");
var expobj          =express();
var bodyParser      =require("body-parser");
var methodOverride  =require("method-override");
var mongoose        =require("mongoose");

//setting database connection
var db=require("./backendconfiguration/db");

//setting port number
var port=process.env.PORT || 8080;

//Getting all the data in our application =======================
//parse all applications
expobj.use(bodyParser.json());
expobj.use(bodyParser.json({type:"application/vnd.api+json"}));
expobj.use(bodyParser.urlencoded({extended:true}));

//override the X-HTTP-Method_Override header
expobj.use(methodOverride("X-HTTP-Method-Override"));

//set the static file in the location
expobj.use(express.static(__dirname + "/public"));

//requiring all the routes in the application
require("./backendapp/routes")(expobj);

//starting our port
expobj.listen(port);

console.log("The server is running at port ",port);
//exporting this module globally
exports=module.exports=expobj;