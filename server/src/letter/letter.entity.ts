import { IsDefined } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Letter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsDefined()
  title: string;

  @Column({ nullable: false })
  @IsDefined()
  content: string;

  @ManyToOne(() => User, (user) => user.letters, { nullable: false })
  @IsDefined()
  user: User;
}
