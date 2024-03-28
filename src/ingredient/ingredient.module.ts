import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, ingredientSchema } from './entities/ingredient.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: ingredientSchema },
    ]),
  ],
  controllers: [IngredientController],
  providers: [IngredientService],
  exports: [IngredientService],
})
export class IngredientModule {}
