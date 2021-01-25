export default {
  type: 'postgres',
  url:`${process.env.DATABASE_URL}`,
  host: `${process.env.DB_HOST}`,
  port: 5432,
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  database: `${process.env.DB_NAME}`,
  entities: ['./src/modules/**/model/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
    esntitiesDir: './src/modules/**/model/*.ts',
  },
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
};
