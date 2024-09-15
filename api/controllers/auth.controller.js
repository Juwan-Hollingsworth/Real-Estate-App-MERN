// auth functions
import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req,res)=>{
    console.log(2+2)
    //define var
    const {username,email,password} = req.body

    //hash the password 
    const hashedPassword = await bcrypt.hash(password, 10)
    
    //create a new user & save to db
    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password:hashedPassword,
        }
    })
    

}
export const login = (req,res)=>{
    //db operations
}
export const logout = (req,res)=>{
    //db operations
}