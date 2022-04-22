// importing mongoose 
import {Schema, model} from "mongoose"; 

// types
export interface userSchemaType{
    username: string,
    email: string,
    password: string,
    refresh_tokens: [string],
}

// schema
const userSchema = new Schema<userSchemaType>({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    refresh_tokens: {type: [String], required: false, unique: true},
});

// exporting model
const userModel = model<userSchemaType>('users', userSchema);
export default userModel;