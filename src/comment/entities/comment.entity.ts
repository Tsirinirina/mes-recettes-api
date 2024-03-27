import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Comment {
  _id?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: string;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' })
  recipe: string;
}

/**
 * Instance of Role Mongoose Schema
 */
export const commentSchema = SchemaFactory.createForClass(Comment);

/**
 * Represents Role Mongoose Document
 */
export type commentDocument = mongoose.HydratedDocument<Comment>;
