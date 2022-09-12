import { UnauthorizedError } from "../../errors/unauthorized-error";
import { makeLoginUseCase } from "../../factories/usecase-factories/login-use-case-factory";
import { makeVerifyTokenUseCase } from "../../factories/usecase-factories/verify-token-use-case-factory";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AuthController {
  static async login(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body;

    const loginUseCase = makeLoginUseCase();
    const loginResult = await loginUseCase.handle({ email, password });

    if(!loginResult) throw new UnauthorizedError();

    return {
      statusCode: 200,
      body: loginResult
    }
  }

  static async verifyToken(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { token } = httpRequest.body;

    const verifyTokenUseCase = makeVerifyTokenUseCase();
    const verifyTokenUseCaseResult = verifyTokenUseCase.handle(token);

    return {
      statusCode: 200,
      body: verifyTokenUseCaseResult
    }
  }
}