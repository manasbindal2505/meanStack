var Contact =   require("./models/contacts");


module.exports = function(expobj){

    expobj.post("/api/contacts",(req,res)=>{
    
        
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

    //show page & Update page show
    expobj.get("/api/contacts",function(req,res){
        Contact.find(function(err,contacts){
            if(err){
                console.log(err);
            }
            res.json(contacts);
        });
    }); 

    //Get single records
    expobj.get("/api/contacts/:id",function(req,res){
        Contact.find({_id:req.params.id},function(err,datatoupd){
            if(err){
                res.send(err);
            }
            res.json(datatoupd);
        });
    });
    //Edit-Update page
    expobj.put("/api/contacts/:id",function(req,res){
      
        Contact.update({_id:req.body._id},{$set:{firstname:req.body.firstname,lastname:req.body.lastname,number:req.body.number}},{
            multi:true},function(err,update){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(update);
                }
            });
    });

    //delete route
    expobj.delete("/api/contacts/:id",function(req,res){
        Contact.remove({_id:req.params.id},function(err,result){
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        });
    });

    //index route
    expobj.get("*",function(req,res){
        res.sendfile("./public/index.html");
    });
};