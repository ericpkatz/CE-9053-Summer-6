/* globals describe it expect beforeEach */
var Foo = require("../app/foo");
describe("Foo", function(){
    it("exists", function(){
        expect(Foo).toBeDefined();
    });
    describe("it can be created", function(){
        var foo;
        beforeEach(function(){
           foo = new Foo("bar"); 
        });
        it("foo has name of bar", function(){
            expect(foo.name).toEqual("bar");
        });
    });
});