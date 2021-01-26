const EstablishmentsSedds = [
  {
    name: 'Estabelecimento 1',
    description: 'Supermercado 1',
    latitude: -3.8301781,
    longitude: -38.4875418,
  },
  {
    name: 'Estabelecimento 2',
    description: '',
    latitude: -3.7233886,
    longitude: -38.5963818,
  },
  {
    name: 'Estabelicimento 3',
    description: 'Supermercado 3',
    latitude: -3.7876131,
    longitude: -38.5471007,
  },
  {
    name: 'Estabelecimento 4',
    description: '',
    latitude: -3.7345283,
    longitude: -38.492165,
  },
  {
    name: 'Estabelecimento 5',
    description: 'Supermercado 5',
    latitude: -3.7354041,
    longitude: -38.4815937,
  },
];

import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Establishment from '../../modules/establishments/model/Establishment';

export default class CreateEstablismentsSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Establishment)
      .values(EstablishmentsSedds)
      .execute();
  }
}
