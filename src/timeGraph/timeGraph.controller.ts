import { Controller, Get, Query } from '@nestjs/common';
import { TimeGraphService } from './TimeGraph.service';
import { TimeGraph } from './TimeGraph.entity';

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
