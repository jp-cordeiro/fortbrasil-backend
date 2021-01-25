import { getCustomRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import EstablishmentsRepository from '../repositories/EstablishmentsRepository';

export default class DeleteEstablishmentService {
  public async execute(id: string): Promise<void> {
    const establishmentsRepository = getCustomRepository(
      EstablishmentsRepository,
    );

    const establishment = establishmentsRepository.findById(id);

    if (!establishment) {
      throw new AppError('Estabelecimento não encontrado.');
    }

    await establishmentsRepository.delete({ id });
  }
}
