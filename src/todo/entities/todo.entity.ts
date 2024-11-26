import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { StatusEnum } from './status.enum';
import { User } from 'src/user/entities/user.entity';

@Entity('todo')
//export class Todo extends BaseEntity
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.PENDING })
  status: StatusEnum;

  @UpdateDateColumn()
  updatedAt: Date;  

  @DeleteDateColumn()
  deletedAt?: Date;  

  @Column()
  userId: number; // Ajout de la propriété userId

  @ManyToOne(() => User, user => user.todos,{onDelete: 'CASCADE'})
  user:User; //Relation avec l'utilisateur
}