import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Rating {
  _id?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: string;

  @Prop({ type: Number, required: true, default: 0 })
  note: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' })
  recipe: string;
}

/**
 * Instance of Role Mongoose Schema
 */
export const ratingSchema = SchemaFactory.createForClass(Rating);

/**
 * Represents Role Mongoose Document
 */
export type ratingDocument = mongoose.HydratedDocument<Rating>;
