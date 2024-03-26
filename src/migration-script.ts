import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { UserService } from './user/user.service';
import config from './config/configuration.constant';

export async function runMigration() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  const su_user = {
    firstname: 'Super Admin',
    lastname: 'SUPER_ADMIN',
    username: config().superAdmin.login,
    address: 'Super admin Address',
    email: 'parajaonarison@gmail.com',
    phone: ['xxxxxxx'],
    password: config().superAdmin.password,
    gender: 'MALE',
    birthPlace: 'birth place',
    birthDate: new Date(),
    photo: 'super_admin.jpg',
    groups: ['654b6343ce78ae9bff9af457'],
    roles: ['654b6343ce78ae9bff9af4c8'],
    filters: [],
    failedConnectionCount: 0,
    isActive: true,
  };
  await userService.create(su_user);

  await app.close();
}

runMigration()
  .then(() => {
    console.log('Migration completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error during migration:', error);
    process.exit(1);
  });
