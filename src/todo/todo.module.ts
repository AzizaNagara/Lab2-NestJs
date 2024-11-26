import { Module , MiddlewareConsumer} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { AuthMiddleware } from '../middleware/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)  // Appliquer le middleware à toutes les routes
      .forRoutes(TodoController);  // Ou appliquer spécifiquement à un contrôleur ou à une route
  }
}