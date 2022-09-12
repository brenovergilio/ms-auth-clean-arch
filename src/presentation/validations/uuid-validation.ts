import { InvalidParamError } from "../errors/invalid-param-error";
import { Validation } from "../protocols/validation";
import { UuidValidator } from "./protocols/uuid-validator";

export class UuidValidation implements Validation {
  constructor(private readonly fieldName: string, private readonly uuidValidator: UuidValidator) {}

  validate(input: any): Error | null {
   const isValid = this.uuidValidator.isValid(input[this.fieldName]);
   if(!isValid) return new InvalidParamError(this.fieldName);
   return null;
  }
}