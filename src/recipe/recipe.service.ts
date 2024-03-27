import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './entities/recipe.entity';
import { Model } from 'mongoose';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name)
    private recipeModel: Model<Recipe>,
  ) {}
  create(createRecipeDto: CreateRecipeDto) {
    return this.recipeModel.create(createRecipeDto);
  }

  findAll() {
    return this.recipeModel.find({});
  }

  findOne(id: string) {
    return this.recipeModel.findById(id);
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeModel.findByIdAndUpdate(id, updateRecipeDto);
  }

  remove(id: string) {
    return this.recipeModel.findByIdAndDelete(id);
  }
}
