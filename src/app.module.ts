import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RatingModule } from './rating/rating.module';
import { RecipeModule } from './recipe/recipe.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RoleModule } from './role/role.module';
import config from './config/configuration.constant';
import { UserService } from './user/user.service';
import { Mongoose } from 'mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(config().mongo.MAIN_DATABASE_URI),
    UserModule,
    RoleModule,
    RecipeModule,
    IngredientModule,
    CommentModule,
    CategoryModule,
    RatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
