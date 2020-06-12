import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationResolver } from './relation.resolver';
import { RelationService } from './relation.service';
import { Relation  } from './relation.entity';
import { ComponentModule } from '../component/component.module';

@Module({
  imports: [TypeOrmModule.forFeature([Relation]), ComponentModule,],
  providers: [ RelationService, RelationResolver],
  exports: [RelationService]
})

export class RelationModule { }
