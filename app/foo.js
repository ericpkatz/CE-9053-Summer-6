var Q = require("q");
module.exports = Foo;

function Foo(name){
    this.name = name;
}

Foo.prototype = {
    doSomething: function(message){
        var dfd = Q.defer();
        var that = this;
        setTimeout(function(){
            var result =(that.name + ":" + message).toUpperCase(); 
            if(message == "bad")
                dfd.reject("BAD is BAD")
            else
                dfd.resolve(result); 
        }, 500);
        return dfd.promise;
    }
};