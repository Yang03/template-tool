import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentResolver } from './component.resolver';
import { ComponentService } from './component.service';
import { Component  } from './component.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Component])],
  providers: [ComponentService, ComponentResolver],
  exports: [ComponentService]
})

export class ComponentModule { }
