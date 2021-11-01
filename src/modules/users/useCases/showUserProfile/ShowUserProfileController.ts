import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.showUserProfileUseCase.execute({ user_id });
      return response.status(201).send();
    } catch (error) {
      return response.status(404).json({ error: "mensagem do erro" });
    }
  }
}

export { ShowUserProfileController };
