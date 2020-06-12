import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Component } from './component.entity';
import { ComponentService } from './component.service';

@Resolver('Component')
export class ComponentResolver {
  constructor(
    @Inject(ComponentService) private readonly componentService: ComponentService,
) { }

  @Query(returns => [Component])
  async findComponent(): Promise<Component[]> {
    return this.componentService.findAll();
   // return c;
  }

}
