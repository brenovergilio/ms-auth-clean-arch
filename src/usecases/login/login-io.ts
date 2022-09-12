import { UserModel } from "../../domain/user/user-model";

export type LoginInput = {
  email: string;
  password: string;
}

export type LoginOutput = UserModel & { token: string } | null;