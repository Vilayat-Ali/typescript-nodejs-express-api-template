// importing mongoose 
import {Schema, model} from "mongoose"; 

// types
export interface userSchemaType{
    username: string,
    email: string,
    password: string,
    role: string,
    refresh_token: string,
}

// schema
const userSchema = new Schema<userSchemaType>({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    role: {type: String, required: true, default: "user"},
    refresh_token: {type: String, required: false, unique: true},
});

// exporting model
const userModel = model<userSchemaType>('users', userSchema);
export default userModel;