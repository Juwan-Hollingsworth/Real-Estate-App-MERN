import express from "express"
const router = express.Router()


// main structure of app functionality
router.get("/test", (req,res)=>{
    console.log("Router works")
})
router.post("/test", (req,res)=>{
    console.log("Router works")
})
router.put("/test", (req,res)=>{
    console.log("Router works")
})
router.delete("/test", (req,res)=>{
    console.log("Router works")
})

export default router