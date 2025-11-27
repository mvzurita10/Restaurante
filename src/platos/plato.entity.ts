import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('platos')
export class Plato {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  categoria: string;

  @Column()
  precio: string;

  @Column()
  disponible: string;

  @Column()
  tiempo_preparacion_min: string;

  @Column()
  calorias: string;

  @Column()
  es_vegetariano: string;

  @Column()
  nivel_picante: string;
}
