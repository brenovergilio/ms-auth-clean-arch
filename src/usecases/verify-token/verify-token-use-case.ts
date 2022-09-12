import { TokenDecoder } from "../protocols/token-decoder";
import { TokenVerifier } from "../protocols/token-verifier";
import { VerifyTokenOutput } from "./verify-token-io";

export class VerifyTokenUseCase {
  constructor(private readonly tokenVerifier: TokenVerifier, private readonly tokenDecoder: TokenDecoder) {}

  handle(token: string): VerifyTokenOutput {
    const isValid = this.tokenVerifier.verify(token);

    if(isValid) {
      const decoded = this.tokenDecoder.decode(token);
      return {
        isValid: true,
        id: decoded.id
      }
    }

    return {
      isValid: false
    }
  }
}