import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  street: string;

  @Column()
  PLZ: string;

  @Column()
  location: string;

  @Column()
  phone: string;
}
