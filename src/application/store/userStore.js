import { create } from "zustand";
import { GetUsersUseCase } from "../usecases/GetUserUseCase";
import { UserRepositoryImpl } from "../../infrastructure/repositories/userRepositoryImpl";

// Creación de instacia del store de usuarioss
const userRepository = new UserRepositoryImpl();
const getUsersUseCase = new GetUsersUseCase(userRepository);

export const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const users = await getUsersUseCase.execute();
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
