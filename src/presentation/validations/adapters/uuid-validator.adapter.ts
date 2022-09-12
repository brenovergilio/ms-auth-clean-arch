import validator from "validator";
import { UuidValidator } from "../protocols/uuid-validator";

export class UuidValidatorAdapter implements UuidValidator {
  isValid(uuid: string): boolean {
    return validator.isUUID(uuid);
  }
}