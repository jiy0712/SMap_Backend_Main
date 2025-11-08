import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaGraph } from './areaGraph.entity';
import { AreaGraphService } from './areaGraph.service';
import { AreaGraphController } from './areaGraph.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AreaGraph])],
  controllers: [AreaGraphController],
  providers: [AreaGraphService],
})
export class AreaGraphModule {}
