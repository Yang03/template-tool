
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relation } from './relation.entity';

@Injectable()
export class RelationService {
  constructor(
    @InjectRepository(Relation)
    private relationRepository: Repository<Relation>,
  ) {}

  async findAll(): Promise<any> {
    return await this.relationRepository.find();
  }

  async findOneById(id): Promise<any> {
    return await this.relationRepository.findOne(id);
  }

  async findByModuleId(mid): Promise<any> {
    const c = await this.relationRepository.find({'metadata_module_id': mid})
    // console.log(mid, '--------------->', c)
    return c;
  }

  // findOne(id: string): Promise<Module> {
  //   return this.usersRepository.findOne(id);
  // }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}