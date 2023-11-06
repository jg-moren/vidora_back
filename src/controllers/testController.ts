import { NextFunction, Request, Response } from "express";
import getestService from "../services/getest.service";

class TestController{
    async select(req: Request, res: Response, next: NextFunction)
    { 
        try
        {
            //const { size, page, membroAtivo, nome, order } = req.query;
            let result;

            
            result = await getestService.execute();

            res.status(200).json({result});
        }
        catch(err) { next(err); }
    }
}

export default new TestController;