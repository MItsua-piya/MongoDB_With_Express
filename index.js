const express =require("express");
const app=express();
const mongoose =require("mongoose");
const path =require("path");
//These two lines configure Express to use EJS (Embedded JavaScript) as the template engine and tell Express where your template files are located.

app.set("views",path.join(__dirname,"views"));
app.set("veiw engine","ejs");
main()
.then(()=>{
    console.log("connection sucessful");
})
.catch(err=> console.log(err));

//The main() function is async because connecting to MongoDB takes time. JavaScript doesn't want to stop the entire program while waiting for the database connection.

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");//whatsapp is db name
}
app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})