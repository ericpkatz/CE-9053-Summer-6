module.exports = Foo;

function Foo(name){
    this.name = name;
}

Foo.prototype = {
    doSomething: function(message, cb){
        var that = this;
        setTimeout(function(){
            var result =(that.name + ":" + message).toUpperCase(); 
            if(message == "bad")
                cb("BAD is BAD")
            else
                cb(null, result); 
        }, 500);
    }
};