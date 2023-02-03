import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Letter } from '../letter/letter.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Letter, (letter) => letter.user)
  letters: Letter[];
}
