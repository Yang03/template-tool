import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { ComponentModule } from './component/component.module';
import { RelationModule } from './relation/relation.module';
import { BlockModule } from './block/block.module';

@Module({
  imports: [

  GraphQLModule.forRoot({
      // debug: false,
      // playground: false,
      // installSubscriptionHandlers: true,
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'kingkong',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: false,
    }),
    ComponentModule,
    RelationModule,
    BlockModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
