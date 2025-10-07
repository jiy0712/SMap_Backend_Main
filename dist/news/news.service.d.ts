import { Repository } from 'typeorm';
import { News } from './news.entity';
import { GetNewsQueryDto } from './dto/get-news-query.dto';
export declare class NewsService {
    private readonly newsRepository;
    constructor(newsRepository: Repository<News>);
    findByCrimeType(query: GetNewsQueryDto): Promise<News[]>;
}
