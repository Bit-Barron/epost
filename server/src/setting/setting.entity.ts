import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  PLZ: string;

  @Column()
  location: string;

  @Column()
  phone: string;

  @ManyToOne(() => User, (user) => user.letters)
  user: User;
}
