const mongoose=require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.Mongo_DB_URL);
const Schema=mongoose.Schema({
    title:String,
    image:String,
    description:String,
    date_update:Date
})
const BlogData=mongoose.model('blogdata',Schema);
module.exports=BlogData;