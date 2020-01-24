var About   =   require("./models/about");
var Contact =   require("./models/contacts");


module.exports = function(expobj){
    //sample route api
    expobj.get("/api/abouts",function(req,res){
        
        About.find(function(err,abouts){
            if(err){
                res.send(err);
            }

            res.json(abouts);

        });
    });

    


    expobj.post("/api/abouts",(req,res)=>{
        //display data on the console
        console.log("First Name:"+req.body.firstname+"\nLast Name:"+req.body.lastname+"\nMobile Number:"+req.body.number);
        
        //add contact
        let newContact=new Contact({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            number:req.body.number
        });

        newContact.save(function(err,contact){
            if(err){
                res.json({msg:"Failed to add Contact"});
            }
            else{
                res.json({msg:"Added Contact"});
            }
        });
    });

    expobj.get("/api/contacts",function(req,res){
        Contact.find(function(err,contacts){
            if(err){
                console.log(err);
            }
            res.json(contacts);
        });
    }); 

    expobj.get("*",function(req,res){
        res.sendfile("./public/index.html");
    });
};