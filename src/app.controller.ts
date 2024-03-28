import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { RoleService } from './role/role.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/migration')
  async migration(@Res() res: Response): Promise<any> {
    console.log('Creation des rôles...');
    await this.appService.generateInitialRole();
    console.log('Creation de la Super Utilisateur...');
    await this.appService.generateSuperUser();
    console.log('Creation des catégorie initial...');
    await this.appService.generateInitialCategory();
    const data = { message: 'Migration de la base de données avec succès!' };
    return res.json(data);
  }
}
