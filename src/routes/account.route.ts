// importing dependencies
import express from 'express';

// making a router
const accountRoute = express.Router();

// importing controllers
import {registerUser, logUserIn, generateToken} from '../controller/account.controller';

// Registering user in the database 
accountRoute.post('/register', registerUser);

// Logging user in 
accountRoute.post('/login', logUserIn);

// Generating a new accessToken 
accountRoute.post('/token', generateToken);

export default accountRoute;