import { UserRepository } from "../../domain/user/user-repository";
import { HashComparer } from "../protocols/hash-comparer";
import { TokenGenerator } from "../protocols/token-generator";
import { LoginInput, LoginOutput } from "./login-io";

export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hashComparer: HashComparer, private readonly tokenGenerator: TokenGenerator) {}

  async handle(input: LoginInput): Promise<LoginOutput> {
    const user = await this.userRepository.findByEmail(input.email);

    if(!user) return null;

    const passwordsMatch = await this.hashComparer.compare(input.password, user.password);

    if(!passwordsMatch) return null;

    const token = this.tokenGenerator.generate({ id: user.id });

    return {
      ...user, token
    }
  }
}