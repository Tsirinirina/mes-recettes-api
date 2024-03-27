import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, recipeSchema } from './entities/recipe.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: recipeSchema }]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
