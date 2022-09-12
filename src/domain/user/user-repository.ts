import { UserModel } from "./user-model";

export interface UserRepository {
  findById(id: string): Promise<UserModel | null>;
  findByEmail(email: string): Promise<UserModel | null>;
  create(user: UserModel): Promise<UserModel>;
  update(partialUser: { id: string } & Partial<UserModel>): Promise<UserModel>;
  delete(id: string): Promise<void>;
}