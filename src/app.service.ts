import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user/entities/user.entity';
import { Model } from 'mongoose';
import { Recipe } from './recipe/entities/recipe.entity';
import { Ingredient } from './ingredient/entities/ingredient.entity';
import { Role, RoleType } from './role/entities/role.entity';
import { Rating } from './rating/entities/rating.entity';
import { Category } from './category/entities/category.entity';
import config from './config/configuration.constant';
import { Comment } from './comment/entities/comment.entity';
import { UserService } from './user/user.service';
import { RoleService } from './role/role.service';
@Injectable()
export class AppService {
  constructor(
    private readonly roleService: RoleService,
    private readonly userService: UserService,
  ) {}

  async generateInitialRole(): Promise<any> {
    const initialRoles = [
      {
        name: RoleType.SUPER_ADMIN,
      },
      {
        name: RoleType.USER,
      },
      {
        name: RoleType.GUEST,
      },
    ];
    return await this.roleService.create(initialRoles);
  }

  async generateSuperUser(): Promise<any> {
    const su_role = await this.roleService.findByName(RoleType.SUPER_ADMIN);
    console.log('Super User id: ', su_role._id);

    const super_user = {
      username: config().superAdmin.username,
      email: config().superAdmin.email,
      phone: config().superAdmin.phone,
      password: config().superAdmin.password,
      role: su_role._id,
      failedConnectionCount: 0,
      isActive: true,
    };
    return await this.userService.create(super_user);
  }
}
