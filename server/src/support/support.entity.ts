import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Support {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  support: string;
}
