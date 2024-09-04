import express from "express"
import { login, logout, register } from "../controllers/auth.controller.js"
const router = express.Router()

// These will all be post requests because we will be getting information from the end user

router.get("/register", register)
router.post("/login", login)
router.post("/logout", logout)



export default router