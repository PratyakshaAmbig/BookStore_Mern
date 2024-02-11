import express from "express";
import User from "../models/user-model.js"
import {signupSchema } from "../user-validator.js"
import {validateUsermiddleware} from "../middleware/validateUserMiddleware.js"
import loginSchma from "../user-validator.js"
const router = express.Router();
router.route("/").post( validateUsermiddleware(signupSchema),async(req,resp)=>{
    try {
        const {username, password, email, phone} = req.body;
       const validateEmail = await User.findOne({email:email})
       if(validateEmail){
        return resp.status(404).json({message:"Email is already exist.."})
       }
       else{
        const storeUserData = await User.create({username,password,email,phone});
        return resp.status(200).json({message:"Registration is successfully.."})
       }
       
    } catch (error) {
        console.log(error.message)
    }
})

router.route("/login").post(validateUsermiddleware(loginSchma), async (req, resp)=>{
    try {
        const {email, password} = req.body;
        const validateEmail = await User.findOne({email:email});
        if(!validateEmail){
            return resp.status(404).json({message:"Invalid email address.."})
        }
       const validatePassword = await User.findOne({password:password});
       if(!validatePassword){
        return resp.status(400).json({message:"Invalid password.."})
       }
       else{
        return resp.status(200).json({message:"Login successfully..",token: await validatePassword.generateToken()})
       }
    } catch (error) {
        console.log(error)
    }
})

export default router;