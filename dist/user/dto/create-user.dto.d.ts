import { Cv } from 'src/cv/entities/cv.entity';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    cvs: Cv[];
}
