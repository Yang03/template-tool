import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockResolver } from './block.resolver';
import { BlockService } from './block.service';
import { Block  } from './block.entity';
import { RelationModule } from '../relation/relation.module';

@Module({
  imports: [TypeOrmModule.forFeature([Block]), RelationModule],
  providers: [BlockService, BlockResolver],
  exports: [BlockService]
})

export class BlockModule { }