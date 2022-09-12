import { UserModel } from "../../../domain/user/user-model";
import { UserRepository } from "../../../domain/user/user-repository";
import { prismaClient } from "../prisma/prisma";

export class DbUserRepository implements UserRepository {
  async findById(id: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: {
        id
      }
    });

    if(!prismaUser) return null;
    
    const { created_at, updated_at, ...userModel } = prismaUser

    return userModel;
  }
  async findByEmail(email: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: {
        email
      }
    });

    if(!prismaUser) return null;

    const { created_at, updated_at, ...userModel } = prismaUser

    return userModel;
  }


  async create(user: UserModel): Promise<UserModel> {
    const prismaUser = await prismaClient.user.create({
      data: user
    });

    const { created_at, updated_at, ...userModel } = prismaUser

    return userModel;
  }
  async update(partialUser: Partial<UserModel>): Promise<UserModel> {
    const prismaUser = await prismaClient.user.update({
      where: {
        id: partialUser.id
      }, data: partialUser
    });

    const { created_at, updated_at, ...userModel } = prismaUser

    return userModel;
  }
  async delete(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id
      }
    });
  }
}