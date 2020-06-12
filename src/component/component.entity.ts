import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql'
// import { Relation } from '../relation/relation.entity';


@Entity('component')
@ObjectType()
export class Component {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  attribute: string;

  @Column()
  origin_attribute: string;

  @Column()
  event_type: number;

  @Column()
  event_url: string;

  @Column()
  transform_rule: string;

  @Column()
  business_type: number;

  @Column()
  client_type: number;

  @Column()
  not_img: string;

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

  // @ManyToOne(type => Relation, Relation => Relation.component) // specify inverse side as a second parameter
  // relation: Relation;
}

// @Entity('Module')

// export class Modules {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   label: string;

//   @Column()
//   name: string;

//   @Column()
//   parent_type: number;

//   @Column()
//   type: string;

//   @Column()
//   event_type: number;

//   @Column()
//   event_url: string;

//   @Column()
//   transform_rule: string;

//   @Column()
//   attribute: string;

//   @Column()
//   description: string;

//   @Column()
//   show_label: string;

//   @Column()
//   config_label: string;

//   @Column()
//   client_type: number;

//   @Column()
//   is_default: string;

//   @Column()
//   remark: string;

//   @Column()
//   creator: string;

//   @Column()
//   modifier: string;

//   @Column()
//   gmt_created: Date;

//   @Column()
//   gmt_modified: Date;


//   @Column()
//   is_delete: string;
  
// }
