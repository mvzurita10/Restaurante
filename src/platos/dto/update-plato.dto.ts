import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePlatoDto {
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
