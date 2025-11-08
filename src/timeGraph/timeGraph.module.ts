import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeGraph } from './TimeGraph.entity';
import { TimeGraphService } from './TimeGraph.service';
import { TimeGraphController } from './TimeGraph.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TimeGraph])],
  controllers: [TimeGraphController],
  providers: [TimeGraphService],
})
export class TimeGraphModule {}
