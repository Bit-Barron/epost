import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  posts: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
