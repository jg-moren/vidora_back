import { NextFunction, Request, Response } from "express";
import getShoesService from "../services/getShoes.service";

class ShoesController{
    async select(req: Request, res: Response, next: NextFunction)
    { 
        try
        {
            let result;

            
            result = await getShoesService.execute();

            res.status(200).json({result});
        }
        catch(err) { next(err); }
    }
}

export default new ShoesController;