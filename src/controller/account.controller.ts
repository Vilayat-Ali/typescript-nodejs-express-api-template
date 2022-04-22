import {Request, Response} from "express";

// access token generator 
import {generateAccessToken, generateRefreshToken} from "../auth/token";
// password hashing
import {encrypt, verifyHash} from "../lib/Encrypt";
// auth middleware 
import verifyToken from "../auth/verify";
// user data model
import userModel from "../models/user.model";

// registering the user
export const registerUser = async(req: Request, res: Response) => {
    try{
        const user = req.body; 
        const hashPassword  = encrypt(user.password); 

        // access token valid for 2 hours
        const accessToken = generateAccessToken(user.username, user.email, Number(process.env.ACCESS_TOKEN_EXPIRATION_TIME_LIMIT)!);
    
        // new instance of the user model
        const newUserInstance = new userModel({
            username: user.username,
            email: user.email,
            password: hashPassword,
        });
    
        // saving instanne in the database
        const _savedUser = await newUserInstance.save();

        // response 
        return res.json({ok: 'true', message: 'user registered successfully', access_token: accessToken});
    }
    catch(err: any){
        return res.json({ok: 'false', message: 'error while registering the user', error: `${err.message}`});
    }
}


// logging in the user
export const logUserIn = async(req: Request, res: Response, verifyToken: any) => {
    try{
        const userCredentials = req.body;
        const email = userCredentials.email;

        // searching the user inside the database
        const userFromDB = await userModel.findOne({email});

        if(userFromDB && verifyHash(userCredentials.password, userFromDB.password)){
            const accessToken = generateAccessToken(userFromDB.username, userFromDB.email, Number(process.env.ACCESS_TOKEN_EXPIRATION_TIME_LIMIT)!);
             // response 
            return res.json({ok: 'true', message: 'user logged in successfully', access_token: accessToken});
        }
        else{
            return res.json({ok: 'false', message: 'invalid credentials', error: 'user with those credentials does not exist'});
        }
    }
    catch(err: any){
        return res.json({ok: 'false', message: 'error while logging the user', error: err.message});
    }
}

// generating access token
export const generateToken = (req: Request, res: Response) => {

}