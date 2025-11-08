import { Controller, Get, Query } from '@nestjs/common';
import { TimeGraphService } from './timeGraph.service';
import { TimeGraph } from './timeGraph.entity';

@Controller('timeGraph')
export class TimeGraphController {
  constructor(private readonly timeGraphService: TimeGraphService) {}

  @Get()
  async getAll(): Promise<TimeGraph[]> {
    return this.timeGraphService.findAll();
  }

  @Get('search')
  async getByCondition(
    @Query('crimetype') crimetype?: string,
    @Query('time') time?: string,
  ): Promise<TimeGraph[]> {
    return this.timeGraphService.findByCondition(crimetype, time);
  }
}
