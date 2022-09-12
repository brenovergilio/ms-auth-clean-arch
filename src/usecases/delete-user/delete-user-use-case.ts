import { UserRepository } from "../../domain/user/user-repository";
import { DeleteUserOutput } from "./delete-user-io";

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(id: string): Promise<DeleteUserOutput> {
    const user = await this.userRepository.findById(id);

    if(!user) return null;

    await this.userRepository.delete(id);
    return user;
  }
}