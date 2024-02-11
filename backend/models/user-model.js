import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

userSchema.methods.generateToken = async function(){
    try {
        const JWT_SECRET_KEY = "This is pratyaksha ambig"

        return jwt.sign({
            email:this.email,
            password:this.password
        },
        JWT_SECRET_KEY
        )
    } catch (error) {
        console.log(error.message)
    }
}
 const User = new mongoose.model("User", userSchema);
export default User;
