import { hash } from 'bcryptjs';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import User from '../../modules/users/model/User';

export default class CreateUsersSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const UsersSeeds = [
      {
        name: 'Admin',
        email: 'admin@teste.com',
        password: await hash('123456', 8),
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(UsersSeeds)
      .execute();
  }
}
