import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    if (err instanceof Error) {
      try {
      const parsedError = JSON.parse(err.message);
      if(parsedError.message === "Validation failed"){
            return res.status(400).json(parsedError);
      }
        return res.status(500).json({message: err.message});
      } catch (e){
      return res.status(500).json({message: err.message});
      }

    }
    return res.status(500).json({ message: "Internal server error" });
};