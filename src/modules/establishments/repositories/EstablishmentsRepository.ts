import { EntityRepository, Repository } from 'typeorm';

import Establishment from '../model/Establishment';

@EntityRepository(Establishment)
export default class EstablishmentsRepository extends Repository<Establishment> {
  public async findById(id: string): Promise<Establishment | null> {
    const establishment = await this.findOne({
      where: { id },
    });
    return establishment || null;
  }
  public async findByName(name: string): Promise<Establishment | null> {
    const establishmentByName = await this.findOne({
      where: { name },
    });
    return establishmentByName || null;
  }
  public async findByCoord(
    latitude: number,
    longitude: number,
  ): Promise<Establishment | null> {
    const establishmentByCoord = await this.findOne({
      where: { latitude, longitude },
    });
    return establishmentByCoord || null;
  }
}
