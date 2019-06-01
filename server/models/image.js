const mongoose=require('mongoose');
const Schema = mongoose.Schema;
var ImageSchema = new Schema({
    imageName:{
        type:String,
        required:true
    },
})

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;