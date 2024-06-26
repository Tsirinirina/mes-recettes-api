import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './entities/role.entity';
import { Model } from 'mongoose';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<Role>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create(createRoleDto);
  }

  findAll() {
    return this.roleModel.find();
  }

  findOne(id: string) {
    return this.roleModel.findById(id);
  }

  findByName(name: string) {
    return this.roleModel.findOne({ name });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.findByIdAndUpdate(id, updateRoleDto);
  }

  remove(id: string) {
    return this.roleModel.findByIdAndDelete(id);
  }
}
