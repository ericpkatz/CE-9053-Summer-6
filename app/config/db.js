var Q = require("q");
var mongoose = require("mongoose");
module.exports = {
    connect: connect,
    disconnect: disconnect
}

function connect(cb){
    var dfd = Q.defer();
    mongoose.connect("mongodb://localhost:27017/my_world");
    mongoose.connection.on("open", function(){
        dfd.resolve();
    });
    mongoose.connection.on("error", function(error){
       dfd.reject(error); 
    });
    return dfd.promise;
}

function disconnect(cb){
    var dfd = Q.defer();
    return dfd.promise;
}