import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
