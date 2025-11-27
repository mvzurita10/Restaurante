import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Plato {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
