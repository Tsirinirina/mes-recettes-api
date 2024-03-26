import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export enum DIFFICULTY {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}
@Schema({ timestamps: true })
export class Recipe {
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Category' })
  category: string[];

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Ingredient' })
  ingredients: string;

  @Prop({ type: String, required: true })
  instruction: string;

  @Prop({ type: Number, required: true })
  preparationTime: Number;

  @Prop({ type: String, required: true })
  Difficulty: string;

  @Prop({ type: String, enum: Object.values(DIFFICULTY), required: true })
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: string;
}
