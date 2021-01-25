import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const userCreated = await createUser.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(userCreated);
  },
};
