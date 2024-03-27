import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient } from './entities/ingredient.entity';
import { Model } from 'mongoose';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient.name)
    private ingredientModel: Model<Ingredient>,
  ) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientModel.create(createIngredientDto);
  }

  findAll() {
    return this.ingredientModel.find({});
  }

  findOne(id: string) {
    return this.ingredientModel.findById(id);
  }

  update(id: string, updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientModel.findByIdAndUpdate(id, updateIngredientDto);
  }

  remove(id: string) {
    return this.ingredientModel.findByIdAndDelete(id);
  }
}
