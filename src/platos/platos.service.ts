import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plato } from './plato.entity';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';

@Injectable()
export class PlatosService {
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>,
  ) {}

  create(createPlatoDto: CreatePlatoDto) {
    const plato = this.platoRepository.create(createPlatoDto);
    return this.platoRepository.save(plato);
  }

  findAll() {
    return this.platoRepository.find();
  }

  findOne(id: string) {
    return this.platoRepository.findOne({ where: { id } });
  }

  async update(id: string, updatePlatoDto: UpdatePlatoDto) {
    const plato = await this.platoRepository.findOne({ where: { id } });
    if (!plato) return null;
    Object.assign(plato, updatePlatoDto);
    return this.platoRepository.save(plato);
  }

  async remove(id: string) {
    const plato = await this.platoRepository.findOne({ where: { id } });
    if (!plato) return null;
    return this.platoRepository.remove(plato);
  }
}
