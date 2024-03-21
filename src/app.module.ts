import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import config from './config/configuration.constant';
@Module({
  imports: [
    MongooseModule.forRoot(config().mongo.MAIN_DATABASE_URI),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
