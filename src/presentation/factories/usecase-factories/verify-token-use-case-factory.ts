import { VerifyTokenUseCase } from "../../../usecases/verify-token/verify-token-use-case";
import { makeJwtAdapter } from "../sec-factories/jwt-adapter-factory";

export const makeVerifyTokenUseCase = (): VerifyTokenUseCase => {
  const jwtAdapter = makeJwtAdapter();
  const verifyTokenUseCase = new VerifyTokenUseCase(jwtAdapter, jwtAdapter);
  return verifyTokenUseCase;
}