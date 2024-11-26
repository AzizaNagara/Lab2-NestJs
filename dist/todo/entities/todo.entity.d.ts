import { StatusEnum } from './status.enum';
import { User } from 'src/user/entities/user.entity';
export declare class TodoEntity {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    status: StatusEnum;
    updatedAt: Date;
    deletedAt?: Date;
    userId: number;
    user: User;
}
