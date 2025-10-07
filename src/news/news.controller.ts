import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { GetNewsQueryDto } from './dto/get-news-query.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews(@Query() query: GetNewsQueryDto) {
    return this.newsService.findByCrimeType(query);
  }
}
