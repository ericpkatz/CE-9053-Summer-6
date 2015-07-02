var db = require("./app/config/db");
var Thing = require("./app/models").Thing;
var colors = require("colors");

db.connect()
    .then(function(){
        console.log("we are connected".green);
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
        console.log("here are the things".underline)
        things.forEach(function(thing){
            console.log(thing.name.blue);
        });
        return Thing.findById(things[0]._id);
    })
    .then(function(thing){
        console.log("here is the first thing".underline)
        console.log(thing);
        return db.disconnect()
    })
    .then(function(){
        console.log("connection is closed".green);
    })
    .catch(function(e){
       console.log(e); 
    });
