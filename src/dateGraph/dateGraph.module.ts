import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateGraph } from './dateGraph.entity';
import { DateGraphService } from './dateGraph.service';
import { DateGraphController } from './dateGraph.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DateGraph])],
  controllers: [DateGraphController],
  providers: [DateGraphService],
})
export class DateGraphModule {}
