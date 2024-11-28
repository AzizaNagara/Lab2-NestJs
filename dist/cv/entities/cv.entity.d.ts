import { User } from '../../user/entities/user.entity';
import { Skill } from '../../skill/entities/skill.entity';
export declare class Cv {
    id: number;
    name: string;
    firstname: string;
    age: number;
    cin: string;
    job: string;
    path: string;
    user: User;
    skills: Skill[];
}
