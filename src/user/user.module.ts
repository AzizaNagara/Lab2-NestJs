import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registers UserRepository
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, TypeOrmModule], // Export UserService and TypeOrmModule for reuse
})
export class UserModule {}
