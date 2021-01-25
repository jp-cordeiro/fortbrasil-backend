import { getCustomRepository } from 'typeorm';
import AppError from '../../../errors/AppError';
import Establishment from '../model/Establishment';
import EstablishmentsRepository from '../repositories/EstablishmentsRepository';
interface ICretateEstablishmentDTO {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}
class CreateEstablishmentService {
  public async execute({
    name,
    description,
    latitude,
    longitude,
  }: ICretateEstablishmentDTO): Promise<Establishment> {
    const establishmentsRepository = getCustomRepository(
      EstablishmentsRepository,
    );

    const establishmentSameName = await establishmentsRepository.findByName(
      name,
    );

    if (establishmentSameName) {
      throw new AppError(`Já existe um extabelicimento com o mesmo nome`);
    }

    const establishmentSameCoord = await establishmentsRepository.findByCoord(
      latitude,
      longitude,
    );

    if (establishmentSameCoord) {
      throw new AppError(
        `Já existe um extabelicimento(name: ${establishmentSameCoord.name}) com as mesmas coordenadas`,
      );
    }

    const data = {
      name,
      description,
      latitude,
      longitude,
    };

    const establishment = establishmentsRepository.create(data);

    await establishmentsRepository.save(establishment);

    return establishment;
  }
}

export default CreateEstablishmentService;
