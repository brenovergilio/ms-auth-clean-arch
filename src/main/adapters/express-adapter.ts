import { NextFunction, Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

export class ExpressAdapter {
  static adapt(func: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { body, params } = req;
        const httpRequest: HttpRequest = { body, params };
        const httpResponse: HttpResponse = await func(httpRequest);
        return res.status(httpResponse.statusCode).json(httpResponse.body);
      } catch (error) {
        next(error);
      }
    }
  }
}