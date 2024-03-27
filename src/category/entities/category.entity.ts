import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Category {
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  description?: string;
}

/**
 * Instance of Role Mongoose Schema
 */
export const categorySchema = SchemaFactory.createForClass(Category);

/**
 * Represents Role Mongoose Document
 */
export type categoryDocument = mongoose.HydratedDocument<Category>;
