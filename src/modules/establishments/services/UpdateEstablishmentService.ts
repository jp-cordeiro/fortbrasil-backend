import { getCustomRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import Establishment from '../model/Establishment';
import EstablishmentsRepository from '../repositories/EstablishmentsRepository';

interface IUpdateEstablishment {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export default class UpdateEstablishmentService {
  public async execute({
    id,
    name,
    description,
    latitude,
    longitude,
  }: IUpdateEstablishment): Promise<Establishment> {
    const establishmentsRepository = getCustomRepository(
      EstablishmentsRepository,
    );

    const establishment = await establishmentsRepository.findById(id);

    if (!establishment) {
      throw new AppError('Estabelecimento não encontrado.');
    }

    const establishmentUpdated = await establishmentsRepository.save({
      id,
      name,
      description,
      latitude,
      longitude,
    });

    return establishmentUpdated;
  }
}
