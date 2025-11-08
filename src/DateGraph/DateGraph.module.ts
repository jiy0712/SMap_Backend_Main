import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateGraph } from './DateGraph.entity';
import { DateGraphService } from './DateGraph.service';
import { DateGraphController } from './DateGraph.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DateGraph])],
  controllers: [DateGraphController],
  providers: [DateGraphService],
})
export class DateGraphModule {}
