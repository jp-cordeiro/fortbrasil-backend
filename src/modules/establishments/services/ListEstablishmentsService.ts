import { getCustomRepository } from 'typeorm';
import Establishment from '../model/Establishment';
import EstablishmentsRepository from '../repositories/EstablishmentsRepository';

export default class ListEstablishmentsService {
  public async execute(id: string = null): Promise<Establishment[]> {
    const establishmentsRepository = getCustomRepository(
      EstablishmentsRepository,
    );

    const establishments = await establishmentsRepository.find();

    return establishments;
  }
}
