import User from "../models/userModels.js";
import asyncHandler from 'express-async-handler';

 
export const authUser = asyncHandler (
    async (req, res) => {
        const { password, email } = req.body;
        const user = await User.findOne({ email });
        if(user){
            const isPasswortCorrect = await user.matchPassword(password);
            if(isPasswortCorrect){
                res.status(200).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                })
            } else {
                res.status(401);
                throw new Error("invalid email or passwort")
    
            }
        } else {
            res.status(401);
            throw new Error("invalid email or passwort")
    
        }
    })






