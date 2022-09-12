import { UserRepository } from "../../domain/user/user-repository";
import { DuplicatedFieldError } from "../errors/duplicated-field-error";
import { HashGenerator } from "../protocols/hash-generator";
import { CreateUserInput, CreateUserOutput } from "./create-user-io";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hashGenerator: HashGenerator) {}

  async handle(input: CreateUserInput): Promise<CreateUserOutput> {
    const userById = await this.userRepository.findByEmail(input.email);

    if(userById) throw new DuplicatedFieldError('ID');
    
    const userByEmail = await this.userRepository.findByEmail(input.email);

    if(userByEmail) throw new DuplicatedFieldError('email');

    input.password = await this.hashGenerator.hash(input.password);

    const newUser = await this.userRepository.create(input);
    return newUser;
  }
}