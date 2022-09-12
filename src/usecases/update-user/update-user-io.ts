import { UserModel } from "../../domain/user/user-model";

export type UpdateUserInput = { id: string } & Partial<UserModel>;

export type UpdateUserOutput = UserModel | null;