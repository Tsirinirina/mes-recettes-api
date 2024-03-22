import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import config from './config/configuration.constant';

console.log(
  `Launching NestJS app on port ${config().server.port}, URL: http://${config().server.host}:${config().server.port}`,
);
console.log(`Mongoose URI ${config().mongo.MAIN_DATABASE_URI}`);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(config().server.port);
}
bootstrap();
