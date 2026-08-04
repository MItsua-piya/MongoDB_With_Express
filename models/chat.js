const mongoose =require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
      type:String,
    },
    to:{
        type:String,
    },
    msg:{
        type:String,
    },
    created_at:{
        type:Date,
         default: Date.now,
        required:true,
    },
})
const Chat = mongoose.model("Chat",chatSchema);
module.exports=Chat;