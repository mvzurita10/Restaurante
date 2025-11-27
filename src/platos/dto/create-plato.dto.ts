import { IsNumber, IsString } from 'class-validator';

export class CreatePlatoDto {
  @IsNumber()
    codigo: number;
  
  @IsString()
    nombre: string;
  
  @IsString()
    descripcion: string;
  
  @IsString()
    categoria: string;
  
  @IsNumber()
    precio: number;
  
  @IsNumber()
    disponible: number;
  
  @IsNumber()
    tiempo_preparacion_min: number;
  
  @IsNumber()
    calorias: number;
  
  @IsString()
    es_vegetariano: string;
  
  @IsNumber()
    nivel_picante: number;
}
