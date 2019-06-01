const mongoose=require('mongoose');
const Schema = mongoose.Schema;
var ImageSchema = new Schema({
    imageName:{
        type:String,
        required:true
    },
})

var NewsImage = mongoose.model('NewsImage', ImageSchema);

module.exports = NewsImage;