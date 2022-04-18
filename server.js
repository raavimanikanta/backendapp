const express=require("express")
const cors=require("cors")
const mainRoute=require("./routes")

const app=express();
app.use(cors())

app.use("/api/v1",mainRoute)

app.listen(5000,()=>{
   console.log("Application Started Running");
})