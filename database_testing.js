var db = require("./app/config/db");
var Thing = require("./app/models").Thing;

db.connect()
    .then(function(){
        console.log("we are connected");
        return Thing.remove({})
    })
    .then(function(){
        var thing = new Thing({name: 'Rock'});
        return thing.save();
    })
    .then(function(){
        var thing = new Thing({name: 'Paper'});
        return thing.save();
    })
    .then(function(){
        var thing = new Thing({name: 'Scissors'});
        return thing.save();
    })
    .then(function(){
        return Thing.find().sort("name");
    })
    .then(function(things){
        console.log(things);
        return Thing.findById(things[0]._id);
    })
    .then(function(thing){
        console.log(thing);
        return db.disconnect()
    })
    .then(function(){
        console.log("connection is closed");
    })
    .catch(function(e){
       console.log(e); 
    });
