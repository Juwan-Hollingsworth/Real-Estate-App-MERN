import express from "express";
import postRoute from "./routes/post.route.js"
const app = express();
const port = 8800

//API ENDPOINTS
app.use("/api/test", (req,res)=>{
res.send("It works!")

})

app.use("/api/auth/register", (req,res)=>{
    res.send("It works!")
    
    })
app.use("/api/auth/login", (req,res)=>{
    res.send("It works!")
    
    })
app.use("/api/auth/logout", (req,res)=>{
    res.send("It works!")
    
    })
    
app.use("/api/posts/", (req,res)=>{
    res.send("It works!")
    
    })
app.use("/api/posts/", postRoute
    
    )
app.use("/api/posts/12343", (req,res)=>{
    res.send("It works!")
    
    })
    



app.listen(port, ()=>{
    console.log(`Server is running at ${port}.`)
});
