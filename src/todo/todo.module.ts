import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { AuthMiddleware } from '../middleware/auth.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])], // Registers repository for TodoEntity
  providers: [TodoService],
  controllers: [TodoController],
  exports: [TodoService], // Exports TodoService if needed in other modules
})
export class TodoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(TodoController); // Applying AuthMiddleware
  }
}
