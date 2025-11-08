import { Controller, Get, Query } from '@nestjs/common';
import { DateGraphService } from './dateGraph.service';
import { DateGraph } from './dateGraph.entity';

@Controller('dateGraph')
export class DateGraphController {
  constructor(private readonly dateGraphService: DateGraphService) {}

  @Get()
  async getAll(): Promise<DateGraph[]> {
    return this.dateGraphService.findAll();
  }

  @Get('search')
  async getByCondition(
    @Query('crimetype') crimetype?: string,
    @Query('date') date?: string,
  ): Promise<DateGraph[]> {
    return this.dateGraphService.findByCondition(crimetype, date);
  }
}
