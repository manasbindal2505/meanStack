var About   =   require("./models/about");

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

    expobj.get("*",function(req,res){
        res.sendfile("./public/index.html");
    });
};