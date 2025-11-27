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
    private readonly PlatoRepository: Repository<Plato>,
  ) {}

  create(createPlatoDto: CreatePlatoDto) {
    const Plato = this.PlatoRepository.create(createPlatoDto);
    return this.PlatoRepository.save(Plato);
  }

  findAll() {
    return this.PlatoRepository.find();
  }

  findOne(id: string) {
    return this.PlatoRepository.findOne({ where: { id } });
  }

  async update(id: string, updatePlatoDto: UpdatePlatoDto) {
    const Plato = await this.PlatoRepository.findOne({ where: { id } });
    if (!Plato) return null;
    Object.assign(Plato, updatePlatoDto);
    return this.PlatoRepository.save(Plato);
  }

  async remove(id: string) {
    const Plato = await this.PlatoRepository.findOne({ where: { id } });
    if (!Plato) return null;
    return this.PlatoRepository.remove(Plato);
  }
}
