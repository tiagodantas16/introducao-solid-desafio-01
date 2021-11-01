import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const idAlreadyExists = this.usersRepository.findById(user_id);

    if (!idAlreadyExists) {
      throw new Error("Mensagem do erro");
    }

    const admin = this.usersRepository.turnAdmin(idAlreadyExists);

    return admin;
  }
}

export { TurnUserAdminUseCase };
