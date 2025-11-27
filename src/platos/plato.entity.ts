import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('platos')
export class Plato {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigo: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  categoria: string;

  @Column()
  precio: number;

  @Column()
  disponible: number;

  @Column()
  tiempo_preparacion_min: number;

  @Column()
  calorias: number;

  @Column()
  es_vegetariano: string;

  @Column()
  nivel_picante: number;
}
