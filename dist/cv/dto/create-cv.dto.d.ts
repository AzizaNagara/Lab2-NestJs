import { Skill } from 'src/skill/entities/skill.entity';
import { User } from 'src/user/entities/user.entity';
export declare class CreateCvDto {
    name: string;
    firstname: string;
    age: number;
    cin: string;
    job: string;
    path: string;
    skills?: Skill[];
    user?: User;
}
