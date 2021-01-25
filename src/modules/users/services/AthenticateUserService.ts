import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '../model/User';
import authConfig from '../../../config/auth';
import AppError from '../../../errors/AppError';

interface Request {
  email: string;
  password: string;
}

export default class AtheticateUserService {
  public async execute({ email, password }: Request): Promise<string> {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError('Senha/E-mail incorretos', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Senha/E-mail incorretos', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return token;
  }
}
