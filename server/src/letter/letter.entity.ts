import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ default: 1 })
  price: number;

  @Column({ default: 1 })
  posts: number;

  @Column({ default: 'Einseitig' })
  side: string;

  @Column({ default: 'Schwarzweiß' })
  color: string;

  @ManyToOne(() => User, (user) => user.letters)
  user: User;

  @Column()
  link: string;

  @Column({ default: 'Online geschriebener Brief' })
  documents: string;

  @Column({ default: 'DIN lang' })
  envelope: string;
}
