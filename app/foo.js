module.exports = Foo;

function Foo(name){
    this.name = name;
}

Foo.prototype = {
    doSomething: function(message){
        return (this.name + ":" + message).toUpperCase(); 
    }
};