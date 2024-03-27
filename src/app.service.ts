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
import { CategoryService } from './category/category.service';
@Injectable()
export class AppService {
  constructor(
    private readonly roleService: RoleService,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
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
    const superUser = {
      username: config().superAdmin.username,
      email: config().superAdmin.email,
      phone: config().superAdmin.phone,
      password: config().superAdmin.password,
      role: su_role._id,
      failedConnectionCount: 0,
      isActive: true,
    };
    return await this.userService.create(superUser);
  }

  async generateInitialCategory(): Promise<any> {
    const initialCategory = [
      {
        name: 'Entrée',
        description:
          "Plat léger servi avant le plat principal pour ouvrir l'appétit.",
      },
      {
        name: 'Plat principal',
        description:
          "Plat principal d'un repas, souvent composé de viande, de poisson ou de légumes accompagnés de féculents.",
      },
      {
        name: 'Accompagnement',
        description:
          "Plat d'accompagnement souvent servi avec le plat principal pour compléter le repas.",
      },
      {
        name: 'Dessert',
        description:
          'Plat sucré servi à la fin du repas pour conclure le repas sur une note douce.',
      },
      {
        name: 'Collation',
        description: 'Petit encas consommé entre les repas principaux.',
      },
      {
        name: 'Boisson',
        description: 'Boisson consommée pour accompagner le repas.',
      },
      {
        name: 'Apéritif',
        description:
          "Boisson ou plat léger servi avant le repas principal pour ouvrir l'appétit et accompagner les conversations.",
      },
      {
        name: 'Soupes et potages',
        description:
          'Préparations liquides souvent à base de légumes, de viandes ou de poissons, servies chaudes ou froides.',
      },
      {
        name: 'Salades',
        description:
          'Plats froids à base de légumes, de fruits, de viandes, de poissons ou de céréales, souvent assaisonnés et agrémentés de divers ingrédients.',
      },
      {
        name: 'Pâtes et riz',
        description:
          "Plats à base de pâtes, de riz ou de céréales, souvent accompagnés de sauces ou d'ingrédients variés.",
      },
      {
        name: 'Cuisine du monde',
        description:
          "Recettes provenant de différentes cultures et régions du monde, offrant une variété de saveurs et d'ingrédients uniques.",
      },
      {
        name: 'Végétarien',
        description:
          'Recettes excluant la viande et le poisson, mettant en valeur les légumes, les fruits, les céréales et les légumineuses.',
      },
    ];
    return await this.categoryService.create(initialCategory);
  }
}
