const bodyParser = require("body-parser");
const path = require("path");

module.exports = (app, express, mongoose) => {
  
  mongoose
    .connect(
      "mongodb://TheLawChalleneg:s1234567@thelawchallenge-shard-00-00-pria4.mongodb.net:27017,thelawchallenge-shard-00-01-pria4.mongodb.net:27017,thelawchallenge-shard-00-02-pria4.mongodb.net:27017/test?ssl=true&replicaSet=TheLawChallenge-shard-0&authSource=admin&retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("db is connected");
    })
    .catch(err => {
      console.log("db is not connected", err);
    });
  mongoose.Promise = global.Promise;
  mongoose.set("bufferCommands", false);
};
