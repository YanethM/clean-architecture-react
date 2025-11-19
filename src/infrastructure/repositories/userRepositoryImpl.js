import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { userApi } from "../api/userApi";

export class UserRepositoryImpl extends UserRepository {
  async getUsers() {
    try {
      const data = await userApi.getUsers();
      return data.map((user) => new User(user));
    } catch (error) {
      throw new Error(`Method not implemented.${error.message}`);
    }
  }
}
