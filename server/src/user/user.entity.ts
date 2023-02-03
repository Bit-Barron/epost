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

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  stree: string;

  @Column()
  PLZ: string;

  @Column()
  location: string;

  @Column()
  phone: string;

  @OneToMany(() => Letter, (letter) => letter.user)
  letters: Letter[];
}
