import { UserRepository } from "../../domain/user/user-repository";
import { DuplicatedFieldError } from "../errors/duplicated-field-error";
import { HashGenerator } from "../protocols/hash-generator";
import { UpdateUserInput, UpdateUserOutput } from "./update-user-io";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hashGenerator: HashGenerator) {}

  async handle(input: UpdateUserInput): Promise<UpdateUserOutput> {
    const user = await this.userRepository.findById(input.id);

    if(!user) return null;

    if(input.email) {
      const userByEmail = await this.userRepository.findByEmail(input.email);
      if(userByEmail && userByEmail.id !== user.id) throw new DuplicatedFieldError('email');
    }

    if(input.password) {
      input.password = await this.hashGenerator.hash(input.password);
    }

    const updatedUser = await this.userRepository.update(input);
    return updatedUser;
  }
}