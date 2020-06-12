import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('module')
@ObjectType()
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  name: string;

  @Column()
  parent_type: number;

  @Column()
  type: string;

  @Column()
  event_type: number;

  @Column()
  event_url: string;

  @Column()
  transform_rule: string;

  @Column()
  attribute: string;

  @Column()
  description: string;

  @Column()
  show_label: string;

  @Column()
  config_label: string;

  @Column()
  client_type: number;

  @Column()
  is_default: string;

  @Column()
  remark: string;

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
  
}
