const mongoose= require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id:{type:Number,unique:true,required:true},
        firstName :{type:String},
        lastName :{type:String},
        email:{type:String},
        department:{type:String}
    },
    {
        timestamps:true
    }
)

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;