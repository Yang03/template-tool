
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Component } from './component.entity';

@Injectable()
export class ComponentService {
  constructor(
    @InjectRepository(Component)
    private componentRepository: Repository<Component>,
  ) {}

  async findAll(): Promise<any> {
    return await this.componentRepository.find();
  }

  async findOne(id: any): Promise<any> {
    const c = await this.componentRepository.findOne(id);
    console.log(c);
    return c;
  }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}