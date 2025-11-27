import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PlatosService } from './platos.service';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';

@Controller('Platos')
export class PlatosController {
  constructor(private readonly PlatosService: PlatosService) {}

  @Post()
  create(@Body() createplatoDto: CreatePlatoDto) {
    return this.PlatosService.create(createplatoDto);
  }

  @Get()
  findAll() {
    return this.PlatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PlatosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateplatoDto: UpdatePlatoDto) {
    return this.PlatosService.update(id, updateplatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PlatosService.remove(id);
  }
}
