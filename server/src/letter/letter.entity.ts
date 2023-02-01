import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Letter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: 1 })
  pages: number;

  @Column()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: string;

  @Column({ default: 1 })
  price: number;

  @Column({ default: 1 })
  posts: number;

  @ManyToOne(() => User, (user) => user.letters)
  user: User;
}
