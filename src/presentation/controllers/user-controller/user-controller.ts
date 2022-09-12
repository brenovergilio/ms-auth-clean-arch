import { makeCreateUserUseCase } from "../../factories/usecase-factories/create-user-use-case-factory";
import { makeDeleteUserUseCase } from "../../factories/usecase-factories/delete-user-use-case-factory";
import { makeUpdateUserUseCase } from "../../factories/usecase-factories/update-user-use-case-factory";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createUserValidations, updateUserValidations } from "./user-controller-validations";

export class UserController {
  static async store(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const error = createUserValidations().validate(body);

    if(error) throw error;

    const createUserUseCase = makeCreateUserUseCase();
    const createUserUseCaseResult = await createUserUseCase.handle(body);

    return {
      statusCode: 201,
      body: createUserUseCaseResult
    }
  }

  static async update(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params, body } = httpRequest;

    const error = updateUserValidations(Object.keys(body)).validate(body);

    if(error) throw error;

    const updateUserUseCase = makeUpdateUserUseCase();
    const updateUserUseCaseResult = await updateUserUseCase.handle({ id: params.id , ...body});

    if(!updateUserUseCaseResult) return {
      statusCode: 404,
      body: {
        message: 'User not found'
      }
    }

    return {
      statusCode: 200,
      body: {
        updateUserUseCaseResult
      }
    }
  }

  static async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    if(!id) return {
      statusCode: 400,
      body: {
        message: 'You need to pass an ID'
      }
    }

    const deleteUserUseCase = makeDeleteUserUseCase();
    const deleteUserUseCaseResult = await deleteUserUseCase.handle(id);

    if(!deleteUserUseCaseResult) return {
      statusCode: 404,
      body: {
        message: 'User not found'
      }
    }

    return {
      statusCode: 200,
      body: deleteUserUseCaseResult
    }
  }
}