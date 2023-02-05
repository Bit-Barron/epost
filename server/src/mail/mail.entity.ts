import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mail: string;
}
