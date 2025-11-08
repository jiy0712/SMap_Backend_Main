import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DateGraph } from './DateGraph.entity';

@Injectable()
export class DateGraphService {
  constructor(
    @InjectRepository(DateGraph)
    private readonly dateGraphRepository: Repository<DateGraph>,
  ) {}

  async findAll(): Promise<DateGraph[]> {
    return this.dateGraphRepository.find();
  }

  async findByCondition(crimetype?: string, date?: string): Promise<DateGraph[]> {
    const query = this.dateGraphRepository.createQueryBuilder('d');

    if (crimetype) {
      query.andWhere('d.crimetype = :crimetype', { crimetype });
    }
    if (date) {
      query.andWhere('d.date = :date', { date });
    }

    return query.getMany();
  }
}
