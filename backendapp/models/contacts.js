const mongoose  =require("mongoose");

const contacts  =new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
});

module.exports  =   mongoose.model("contacts",contacts);