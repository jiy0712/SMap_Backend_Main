import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeGraph } from './timeGraph.entity';
import { TimeGraphService } from './timeGraph.service';
import { TimeGraphController } from './timeGraph.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TimeGraph])],
  controllers: [TimeGraphController],
  providers: [TimeGraphService],
})
export class TimeGraphModule {}
