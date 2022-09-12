import { CreateUserUseCase } from "../../../usecases/create-user/create-user-use-case";
import { makeDbUserRepository } from "../db-repositories-factories/db-user-repository-factory";
import { makeBcryptAdapter } from "../sec-factories/bcrypt-adapter-factory";

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const createUserUseCase = new CreateUserUseCase(makeDbUserRepository(), makeBcryptAdapter());
  return createUserUseCase;
}