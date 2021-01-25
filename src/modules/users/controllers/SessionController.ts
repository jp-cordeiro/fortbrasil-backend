import { Request, Response } from 'express';
import AthenticateUserService from '../services/AthenticateUserService';

export default {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUser = new AthenticateUserService();

    const token = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(201).json({token});
  },
};
