//console.log("Hello World");


const express=require("express");
const app =express();

//Db Connection 
mongoose.connect("mongodb+srv://thanvimavanji:mavanjifarms@cluster0.vqdnu9o.mongodb.net/")
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err,"something went wrong");
});

app.get("/test",(req,res)=>{
     res.send("hello, this is test api");
});

app.listen(4000,()=>{
    console.log("Server is Connected");
});



