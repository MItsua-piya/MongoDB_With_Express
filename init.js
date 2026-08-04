const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp"); //whatsapp is db name
}
// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me ur notes",
//      created_at:new Date(),
// });
// chat1.save().then((res)=>{
//     console.log(res);
// });

const chats = [
  {
    from: "Rahul",
    to: "Amit",
    msg: "Let's meet at 6 PM.",
  },
  {
    from: "Anjali",
    to: "Sneha",
    msg: "Happy Birthday!",
  },
  {
    from: "Karan",
    to: "Riya",
    msg: "Did you ",
  },
  {
    from: "Meera",
    to: "Arjun",
    msg: "Call me when you're free.",
  },
];
Chat.insertMany(chats);
