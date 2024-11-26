import { TodoEntity } from "src/todo/entities/todo.entity";
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    todos: TodoEntity[];
}
