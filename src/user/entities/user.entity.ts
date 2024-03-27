import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import { HydratedDocument, Types } from 'mongoose';

/**
 * Represents a User
 */
@Schema({ timestamps: true })
export class User {
  /**
   * Id  of user
   */
  _id?: string | Types.ObjectId;

  /**
   * Username used for login
   */
  @Prop({ type: String, trim: true })
  username: string; // ça peut être le matricule

  /**
   * User email
   */
  @Prop({ type: String, trim: true, required: true, unique: true })
  email: string;

  /**
   * User phone number
   */
  @Prop({ type: String, required: true })
  phone: string;

  /**
   * Encrypted password
   */
  @Prop({ type: String, trim: true })
  password?: string;

  /**
   * User role
   */
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  role: string;

  /**
   * Failed connection count
   */
  @Prop({ type: Number, required: false })
  failedConnectionCount?: number;

  /**
   * Determine if account is active
   */
  @Prop({ type: Boolean, default: true, required: true })
  isActive: boolean;
}

/**
 * Represents User Mongoose Document
 */
export type UserDocument = HydratedDocument<User>;

/**
 * Instance of User Mongoose Schema
 */
export const userSchema = SchemaFactory.createForClass(User);

/**
 * Encrypt password on user creation
 */
userSchema.pre<UserDocument>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});
