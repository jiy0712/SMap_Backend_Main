import { NewsService } from './news.service';
import { GetNewsQueryDto } from './dto/get-news-query.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    getNews(query: GetNewsQueryDto): Promise<import("./news.entity").News[]>;
}
