import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Letter } from '../post/letter.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => Letter, (letter) => letter.user)
  letters: Letter[];
}
