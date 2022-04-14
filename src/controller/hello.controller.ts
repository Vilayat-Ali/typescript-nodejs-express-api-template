import {Request, Response} from 'express';

// demo controller
export const sayHello = (req:Request, res:Response) => {
    res.json({status: 200, message: 'hello'});
}