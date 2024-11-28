import { TodoEntity } from "src/todo/entities/todo.entity";
import { Cv } from '../../cv/entities/cv.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    todos: TodoEntity[];
    cvs: Cv[];
}
