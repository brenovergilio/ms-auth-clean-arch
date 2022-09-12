import { DeleteUserUseCase } from "../../../usecases/delete-user/delete-user-use-case";
import { makeDbUserRepository } from "../db-repositories-factories/db-user-repository-factory";

export const makeDeleteUserUseCase = (): DeleteUserUseCase => {
  return new DeleteUserUseCase(makeDbUserRepository());
}