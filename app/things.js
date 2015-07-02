var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_world");

var thingSchema = mongoose.Schema({
    name: String
});

var Thing = mongoose.model("thing", thingSchema);

mongoose.connection.on("open", function(){
    Thing.find(function(err, result){
        console.log(err);
        console.log("HERE ARE MY THINGS")
        console.log(JSON.stringify(result));
        console.log("-------")
    });
    Thing.findById("55947c49e34dc7575da5c5df", function(err, result){
       console.log("HERE IS PAPER");
       console.log(err); 
       console.log(result);
       console.log("-------")
    }); 
    Thing.find({name: 'Rock'}).then(function(rock){
       console.log("HERE IS THE ROCK");
       console.log(rock) 
    });
    
    var newThing = new Thing({name: Math.random().toString()});
    newThing.save().then(function(result){
       console.log("NEW THING");
       console.log(result); 
    });
    console.log("I am ready");
});
mongoose.connection.on("error", function(error){
    console.log(error);
});
