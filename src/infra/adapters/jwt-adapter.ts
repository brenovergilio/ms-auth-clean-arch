import { DecodedWithID, TokenDecoder } from "../../usecases/protocols/token-decoder";
import { TokenGenerator } from "../../usecases/protocols/token-generator";
import { TokenVerifier } from "../../usecases/protocols/token-verifier";
import jwt from "jsonwebtoken";

export class JwtAdapter implements TokenDecoder, TokenGenerator, TokenVerifier {
  constructor(private readonly secret: string) {}

  generate(value: { id: string; }): string {
    const token = jwt.sign(value, this.secret, {
      expiresIn: '10s'
    });
    return token;
  }

  verify(token: string): boolean {
    try {
      jwt.verify(token, this.secret);
      return true;
    } catch (error) {
      return false;
    }
  }

  decode(token: string): DecodedWithID {
    const decoded = jwt.decode(token) as DecodedWithID;
    return decoded;
  }
}