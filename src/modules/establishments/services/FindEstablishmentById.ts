import { getCustomRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import Establishment from '../model/Establishment';
import EstablishmentsRepository from '../repositories/EstablishmentsRepository';

export default class FindEstablishmentById {
  public async execute(id: string): Promise<Establishment> {
    const establishmentsRepository = getCustomRepository(
      EstablishmentsRepository,
    );

    const establishment = await establishmentsRepository.findOne({
      where: { id },
    });

    if (!establishment) {
      throw new AppError('Estabelecimento não encontrado.');
    }

    return establishment;
  }
}
