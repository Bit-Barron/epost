import { Setting } from 'src/setting/setting.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Letter } from '../letter/letter.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roles: string[];

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Letter, (letter) => letter.user)
  letters: Letter[];

  @OneToMany(() => Setting, (setting) => setting.user)
  settings: Setting[];
}
