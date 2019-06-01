const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const News=new Schema({
    NewsTitle:{
        type:String,
        required:true,
    },
    NewsText:{
        type:String,
        required:true,
    },
    NewsDesc:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now
    }
  
})

module.exports=mongoose.model("News",News);