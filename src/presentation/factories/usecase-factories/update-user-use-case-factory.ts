import { UpdateUserUseCase } from "../../../usecases/update-user/update-user-use-case";
import { makeDbUserRepository } from "../db-repositories-factories/db-user-repository-factory";
import { makeBcryptAdapter } from "../sec-factories/bcrypt-adapter-factory";

export const makeUpdateUserUseCase = (): UpdateUserUseCase => {
  const updateUserUseCase = new UpdateUserUseCase(makeDbUserRepository(), makeBcryptAdapter());
  return updateUserUseCase;
}