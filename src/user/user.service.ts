import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { randUserName, randEmail, randPassword } from '@ngneat/falso';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Inject the User repository
  ) {}

  // Create a new user
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  // Find all users
  findAll() {
    return this.userRepository.find(); // Return all users from the database
  }

  // Find a user by ID
  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  // Update a user
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { id } });
  }

  // Remove a user
  async remove(id: number) {
    const user = await this.findOne(id);
    if (user) {
      await this.userRepository.delete(id);
      return `User with ID ${id} deleted successfully.`;
    }
    return `User with ID ${id} not found.`;
  }

  // Generate a fake user using @ngneat/falso
  generateFakeUser(): User {
    const fakeUser = new User();
    fakeUser.username = randUserName();
    fakeUser.email = randEmail();
    fakeUser.password = randPassword();

    return fakeUser;
  }

  // Seed the database with fake users
  async seedUsers(count: number): Promise<User[]> {
    const fakeUsers: User[] = [];
    for (let i = 0; i < count; i++) {
      const fakeUser = this.generateFakeUser();
      fakeUsers.push(fakeUser);
    }
    return await this.userRepository.save(fakeUsers); // Save fake users to the database
  }
}
