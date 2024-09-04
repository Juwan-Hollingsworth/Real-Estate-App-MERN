import express from "express";

const app = express();
const port = 8800

//API ENDPOINTS
app.use("/api/test", (req,res)=>{
res.send("It works!")

})


app.listen(port, ()=>{
    console.log(`Server is running at ${port}.`)
});
