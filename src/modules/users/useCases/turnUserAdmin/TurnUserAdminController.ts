import { Request, Response } from "express";
import { IRequest } from './TurnUserAdminUseCase';
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try{
      const  user_id  = request.params.user_id;
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(user);
    }catch(error) {
      response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
