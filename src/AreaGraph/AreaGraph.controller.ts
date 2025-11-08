import { Controller, Get, Query } from '@nestjs/common';
import { AreaGraphService } from './areaGraph.service';
import { AreaGraph } from './areaGraph.entity';

@Controller('areaGraph')
export class AreaGraphController {
  constructor(private readonly areaGraphService: AreaGraphService) {}

  @Get()
  async getAll(): Promise<AreaGraph[]> {
    return this.areaGraphService.findAll();
  }

  @Get('search')
  async getByCondition(
    @Query('region') region?: string,
    @Query('crimetype') crimetype?: string,
  ): Promise<AreaGraph[]> {
    return this.areaGraphService.findByCondition(region, crimetype);
  }
}
