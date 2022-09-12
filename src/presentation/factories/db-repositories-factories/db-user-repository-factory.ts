import { DbUserRepository } from "../../../infra/database/db-repositories/db-user-repository";

export const makeDbUserRepository = (): DbUserRepository => {
  return new DbUserRepository();
}