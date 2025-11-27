import { IsString } from 'class-validator';

export class CreatePlatoDto {
  @IsString()
  name: string;
}
