var db = require("./app/config/db");
var Thing = require("./app/models").Thing;

db.connect()
    .then(function(){
        Thing.find(function(err, result){
            console.log(err);
            console.log("HERE ARE MY THINGS")
            console.log(JSON.stringify(result));
            console.log("-------")
        });
    })
    .catch(function(e){
       console.log(e); 
    });
