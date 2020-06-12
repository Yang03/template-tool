import { Inject, UseGuards, Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Block } from './block.entity';
import { BlockService } from './block.service';
import { RelationService } from '../relation/relation.service';
import { Relation } from '../relation/relation.entity';

@Resolver(() => Block)
export class BlockResolver {
  constructor(
    @Inject(BlockService) private readonly blockService: BlockService,
    @Inject(RelationService) private readonly relationService: RelationService,
) { }

  // @Query(returns => [Relation])
  // // @UseGuards()
  // async findRelation(): Promise<Relation> {
  //   return this.relationService.findAll();
  //  // return c;
  // }

  // @Query(returns => Relation)
  // async findModuleRelationById(@Args('id') id: number): Promise<Relation> {
  //   return this.relationService.findOneById(id);
  // }

  @Query(returns => Block)
  async findModuleByType(@Args('type') type: string): Promise<Block> {

    return this.blockService.findModuleByType(type);
  }


  @ResolveField('module', type => [Relation])
  async getComponent(@Parent() blcok: Block): Promise<Relation[]> {
    const { id } = blcok;
    return this.relationService.findByModuleId(id);
  }

  // @ResolveField('component', type => Component)
  // async getComponent(@Parent() relation: Relation): Promise<Component> {
  //   const {component_id} = relation;
  //   return this.componentService.findOne({id: component_id });
  // }
}
