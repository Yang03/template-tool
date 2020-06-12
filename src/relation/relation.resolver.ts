import { Inject, UseGuards, Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Relation } from './relation.entity';
import { RelationService } from './relation.service';
import { ComponentService } from '../component/component.service';
import { Component } from '../component/component.entity';

@Resolver(() => Relation)
export class RelationResolver {
  constructor(
    @Inject(RelationService) private readonly relationService: RelationService,
    @Inject(ComponentService) private readonly componentService: ComponentService,
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

  @Query(returns => [Relation])
  async findByModuleId(@Args('moduleId') moduleId: number): Promise<Relation> {

    return this.relationService.findByModuleId(moduleId);
  }

  @ResolveField('component', type => Component)
  async getComponent(@Parent() relation: Relation): Promise<Component> {
    const {component_id} = relation;
    console.log(component_id)
    return this.componentService.findOne({id: component_id });
  }
}
