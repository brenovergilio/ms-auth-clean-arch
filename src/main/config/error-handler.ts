import { NextFunction, Request, Response } from "express";
import { InvalidParamError } from "../../presentation/errors/invalid-param-error";
import { MissingParamError } from "../../presentation/errors/missing-param-error";
import { UnauthorizedError } from "../../presentation/errors/unauthorized-error";
import { DuplicatedFieldError } from "../../usecases/errors/duplicated-field-error";

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const errorResponse = { message: error.message };
  if(error instanceof InvalidParamError || error instanceof MissingParamError) return res.status(400).json(errorResponse);
  if(error instanceof UnauthorizedError) return res.status(401).json(errorResponse);
  if(error instanceof DuplicatedFieldError) return res.status(422).json(errorResponse);
  return res.status(500).json({ message: 'Internal Server Error' });
}