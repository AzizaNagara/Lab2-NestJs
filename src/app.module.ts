import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { TodoModule } from './todo/todo.module'; // Import TodoModule
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/entities/todo.entity';
import { User } from './user/entities/user.entity';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { Cv } from './cv/entities/cv.entity'; 
import { Skill } from './skill/entities/skill.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aziza',
      database: 'todos',
      entities: [TodoEntity, User, Skill, Cv], // Only entities here
      synchronize: true,
      logging: true,
    }),
    CommonModuleModule,
    TodoModule,
    CvModule, // Import CvModule here
    SkillModule, // Import SkillModule here
    UserModule, // Import UserModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
