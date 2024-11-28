import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { Skill } from 'src/skill/entities/skill.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateCvDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString() // Changed to string to match the Cv entity type
  cin: string;

  @IsNotEmpty()
  @IsString()
  job: string;

  @IsNotEmpty()
  @IsString()
  path: string;

  @IsOptional() // Optional, if not mandatory during creation
  skills?: Skill[];

  @IsOptional() // Optional, if the user is not mandatory during creation
  user?: User;
}
