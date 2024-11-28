import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CommonModuleModule } from './common-module/common-module.module';
import { TodoModule } from './todo/todo.module';
import { TodoEntity } from './todo/entities/todo.entity';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { Cv } from './cv/entities/cv.entity';
import { Skill } from './skill/entities/skill.entity';
import { SeedController } from './seed.controller'; // Import SeedController
import { User } from './user/entities/user.entity';
import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aziza',
      database: 'todos',
      entities: [User, Skill, Cv , TodoEntity], // Database entities
      synchronize: true,
      logging: true,
    }),
    CommonModuleModule,
    UserModule, // Import UserModule for UserService
    CvModule, // Import CvModule for CvService and Cv logic
    SkillModule, // Import SkillModule for SkillService
    TodoModule,
  ],
  controllers: [AppController, SeedController], // Add SeedController here
  providers: [AppService],
})
export class AppModule {}
