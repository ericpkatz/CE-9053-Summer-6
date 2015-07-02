/* globals describe it expect beforeEach afterEach */
var Thing = require("../app/models").Thing;
var db = require("../app/config/db");
describe("Thing", function(){
    var rock, paper, scissors;
    beforeEach(function(done){
        db.connect()
            .then(function(){
                    return Thing.remove({});
            })
            .then(function(){
                rock = new Thing({name: 'Rock'});
                return rock.save() 
            })
            .then(function(_rock){
                console.log(_rock)
                paper = new Thing({name: 'Paper'});
                return paper.save() 
            })
            .then(function(_paper){
                console.log(_paper);
                scissors = new Thing({name: 'Scissors'});
                return scissors.save() 
            })
            .then(function(_scissor){
                console.log(_scissor);
                console.log(scissors._id);
                done();
            });
    });
    
    afterEach(function(done){
       db.disconnect()
        .then(function(){
           done();
       }); 
    });
    
    it("exists", function(){
        expect(Thing).toBeDefined();
    });
    describe("find()", function(){
        var things;
        beforeEach(function(done){
            Thing.find().sort("name").then(function(_things){
                things = _things;
                done();
            });
        });
        it("there are three of them", function(){
           expect(things.length).toEqual(3); 
        });
        it("the first one is Paper", function(){
            expect(things[0].name).toEqual("Paper");
        });
    });
    describe("findById", function(){
       describe("with the _id from rock", function(){
           var name;
           beforeEach(function(done){
               Thing.findById(rock._id)
                    .then(function(_rock){
                        name = _rock.name;
                        done();
                    });
           });
           it("returns the rock", function(){
              expect(name).toEqual("Rock"); 
           });
       }); 
    });
    describe("findOne", function(){
       describe("with name of Rock", function(){
           var name;
           beforeEach(function(done){
               Thing.findOne({ name: 'Rock'})
                    .then(function(_rock){
                        name = _rock.name;
                        done();
                    });
           });
           it("returns the rock", function(){
              expect(name).toEqual("Rock"); 
           });
       }); 
    });
});