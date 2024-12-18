import { Request, Response, NextFunction } from "express";

const parseRawJsonMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body?.data) {
        req.body = { ...JSON.parse(req.body.data) }; 
      }
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid JSON in request body",
    });
  }
};

export default parseRawJsonMiddleware;
