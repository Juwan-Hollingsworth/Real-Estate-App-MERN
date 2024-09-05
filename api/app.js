import express from "express";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"

const app = express();
const port = 8800

app.use(express.json())

//API ENDPOINTS
app.use("/api/test", (req,res)=>{
res.send("It works!")
})
app.use("/api/posts", postRoute 
    )
app.use("/api/auth", authRoute
    )

    


app.listen(port, ()=>{
    console.log(`Server is running at ${port}.`)
});
