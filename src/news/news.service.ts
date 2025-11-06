import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { GetNewsQueryDto } from './dto/get-news-query.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  async findByCrimeType(query: GetNewsQueryDto) {
    const { crimeType } = query;
    if (!crimeType) return this.newsRepository.find();

    const typesArray = crimeType
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0)
      .slice(0, 15);

    if (typesArray.length === 0) return this.newsRepository.find();

    return this.newsRepository
      .createQueryBuilder('news')
      .where('news.crimetype IN (:...types)', { types: typesArray })
      .getMany();
  }
}
