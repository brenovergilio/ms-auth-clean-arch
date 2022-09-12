import { HashComparer } from "../../usecases/protocols/hash-comparer";
import { HashGenerator } from "../../usecases/protocols/hash-generator";
import bcrypt from "bcrypt";

export class BcryptAdapter implements HashComparer, HashGenerator {
  
  constructor(private readonly salt: number) {}

  async compare(firstValue: string, secondValue: string): Promise<boolean> {
    const isValid = await bcrypt.compare(firstValue, secondValue);
    return isValid;
  }

  async hash(id: string): Promise<string> {
    const hashedValue = await bcrypt.hash(id, this.salt);
    return hashedValue;
  }
}