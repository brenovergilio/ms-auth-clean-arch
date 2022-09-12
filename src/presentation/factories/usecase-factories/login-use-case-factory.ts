import { LoginUseCase } from "../../../usecases/login/login-use-case";
import { makeDbUserRepository } from "../db-repositories-factories/db-user-repository-factory";
import { makeBcryptAdapter } from "../sec-factories/bcrypt-adapter-factory";
import { makeJwtAdapter } from "../sec-factories/jwt-adapter-factory";

export const makeLoginUseCase = (): LoginUseCase => {
  const loginUseCase = new LoginUseCase(makeDbUserRepository(), makeBcryptAdapter(), makeJwtAdapter());
  return loginUseCase;
}