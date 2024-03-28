import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export enum IngredientType {
  MEAT = 'Meat',
  VEGETABLE = 'Vegetable',
  FRUIT = 'Fruit',
  DAIRY = 'Dairy',
  GRAIN = 'Grain',
  SPICE = 'Spice',
  SAUCE = 'Sauce',
  SEAFOOD = 'Seafood',
  HERB = 'Herb',
  CONDIMENT = 'Condiment',
  BEVERAGE = 'Beverage',
  OTHER = 'Other',
}

export enum UNITY {
  GRAM = 'Gram',
  KILOGRAM = 'Kilogram',
  TEASPOON = 'Teaspoon',
  TABLESPOON = 'Tablespoon',
  CUP = 'Cup',
  MILLILITER = 'Milliliter',
  LITER = 'Liter',
  PINCH = 'Pinch',
  DASH = 'Dash',
  FLUID_OUNCE = 'Fluid Ounce',
  PINT = 'Pint',
  QUART = 'Quart',
  GALLON = 'Gallon',
}

@Schema()
export class Ingredient {
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, enum: Object.values(IngredientType), required: true })
  type: string;

  @Prop({ type: Number, required: true })
  quantity: Number;

  @Prop({ type: String, enum: Object.values(UNITY), required: true })
  unity: String;
}

/**
 * Instance of Role Mongoose Schema
 */
export const ingredientSchema = SchemaFactory.createForClass(Ingredient);

/**
 * Represents Role Mongoose Document
 */
export type ingredientDocument = mongoose.HydratedDocument<Ingredient>;
