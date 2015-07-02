var mongoose = require("mongoose");

var thingSchema = mongoose.Schema({
    name: String
});

function Thing(){
    return mongoose.model("thing", thingSchema);
}
module.exports  = {
    Thing: Thing()
};
