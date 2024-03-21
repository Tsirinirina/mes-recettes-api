import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

const port = process.env.PORT || 3000;
console.log(
  `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(port);
}
bootstrap();
