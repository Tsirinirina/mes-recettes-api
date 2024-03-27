import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

/**
 * Enumeration of Role type
 */
export enum RoleType {
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

@Schema({ timestamps: true })
export class Role {
  /**
   * Id  of role
   */
  _id: string | Types.ObjectId;

  /**
   * Role name
   */
  @Prop({ type: String, required: true, trim: true })
  name: string;
}
/**
 * Instance of Role Mongoose Schema
 */
export const roleSchema = SchemaFactory.createForClass(Role);

/**
 * Represents Role Mongoose Document
 */
export type roleDocument = HydratedDocument<Role>;
