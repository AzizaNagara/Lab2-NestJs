import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/entities/todo.entity';
import { User } from './user/entities/user.entity';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { Cv } from './cv/entities/cv.entity';
import { Skill } from './skill/entities/skill.entity';
import { SeedController } from './seed.controller'; // Import SeedController

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aziza',
      database: 'todos',
      entities: [TodoEntity, User, Skill, Cv], // Database entities
      synchronize: true,
      logging: true,
    }),
    CommonModuleModule,
    TodoModule,
    CvModule, // Import CvModule for CvService and Cv logic
    SkillModule, // Import SkillModule for SkillService
    UserModule, // Import UserModule for UserService
  ],
  controllers: [AppController, SeedController], // Add SeedController here
  providers: [AppService],
})
export class AppModule {}
