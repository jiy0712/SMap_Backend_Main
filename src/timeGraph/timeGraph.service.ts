import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeGraph } from './TimeGraph.entity';

@Injectable()
export class TimeGraphService {
  constructor(
    @InjectRepository(TimeGraph)
    private readonly timeGraphRepository: Repository<TimeGraph>,
  ) {}

  async findAll(): Promise<TimeGraph[]> {
    return this.timeGraphRepository.find();
  }

  async findByCondition(crimetype?: string, time?: string): Promise<TimeGraph[]> {
    const query = this.timeGraphRepository.createQueryBuilder('t');

    if (crimetype) {
      query.andWhere('t.crimetype = :crimetype', { crimetype });
    }
    if (time) {
      query.andWhere('t.time = :time', { time });
    }

    return query.getMany();
  }
}
