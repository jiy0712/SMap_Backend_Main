import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaGraph } from './areaGraph.entity';

@Injectable()
export class AreaGraphService {
  constructor(
    @InjectRepository(AreaGraph)
    private readonly areaGraphRepository: Repository<AreaGraph>,
  ) {}

  async findAll(): Promise<AreaGraph[]> {
    return this.areaGraphRepository.find();
  }

  async findByCondition(region?: string, crimetype?: string): Promise<AreaGraph[]> {
    const query = this.areaGraphRepository.createQueryBuilder('area');

    if (region) {
      query.andWhere('area.region = :region', { region });
    }
    if (crimetype) {
      query.andWhere('area.crimetype = :crimetype', { crimetype });
    }

    return query.getMany();
  }
}
