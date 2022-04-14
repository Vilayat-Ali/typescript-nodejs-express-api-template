// importing dependencies
import express from 'express';

// making a router
const helloRoute = express.Router();

// importing controllers
import {sayHello} from '../controller/hello.controller';

// defining the routes
helloRoute.get('/', sayHello);

export default helloRoute;