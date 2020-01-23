//This page is used to create a about model

var mongoose    =require("mongoose");

//defining our model
module.exports=mongoose.model("About",{
    name: {type: String, default: ""}
});