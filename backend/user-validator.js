import {z} from "zod";

const loginSchma = z.object({
    email:z.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Name at least of 3 character"})
    .max(250,{message:"Name must not be more than 255 character"}),

    password:z.string({required_error:"Password is required"})
    .min(5,{message:"Password must be at least 5 character"})
    .max(10,{message:"Password can not be grater than 10 character"})
})
export const signupSchema = loginSchma.extend({
    username :z.string({required_error:"Name is require"}).trim()
    .min(3,{message:"Name at least of 3 character"})
    .max(250,{message:"Name must not be more than 255 character"}),

    phone :z.string({required_error:"Phone no is required"})
    .trim()
    .min(10,{message:"Phone no must be at least 10 character"})
    .max(20,{message:"Phone no must not be more than 20 character"}),

    
})

export default loginSchma;