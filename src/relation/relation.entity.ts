import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm";
// import { ObjectType, Field, ID } from 'type-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql'
// import { Component } from '../component/Component.entity';

@Entity('relation')
@ObjectType()
export class Relation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metadata_module_id: number;

  @Column()
  component_id: number;

  @Column()
  component_parent_id: number;

  @Column()
  component_order: number;

  @Column()
  is_default: string;

  @Column()
  creator: string;

  @Column()
  modifier: string;

  @Column()
  gmt_created: Date;

  @Column()
  gmt_modified: Date;

  @Column()
  is_deleted: string;

  // @OneToMany(type => Component, component => component.relation) // specify inverse side as a second parameter
  // component: Component[];

}