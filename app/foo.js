module.exports = Foo;

function Foo(name){
    this.name = name;
}

Foo.prototype = {
    doSomething: function(message, cb){
        var that = this;
        setTimeout(function(){
            var result =(that.name + ":" + message).toUpperCase(); 
            cb(result); 
        }, 500);
    }
};