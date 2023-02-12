import { Setting } from 'src/setting/setting.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Letter } from '../letter/letter.entity';
import { Role } from './role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Role.USER })
  roles: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Letter, (letter) => letter.user)
  letters: Letter[];

  @OneToMany(() => Setting, (setting) => setting.user)
  settings: Setting[];
}
