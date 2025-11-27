import { IsOptional, IsString } from 'class-validator';

export class UpdatePlatoDto {
  @IsString()
  @IsOptional()
  name?: string;
}
