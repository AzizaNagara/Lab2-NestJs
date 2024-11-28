import {Entity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { TodoEntity } from "src/todo/entities/todo.entity";
import { Cv } from '../../cv/entities/cv.entity';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TodoEntity, todo => todo.user)
  todos: TodoEntity[]; 


  @OneToMany(() => Cv, (cv) => cv.user)
  cvs: Cv[];
}

