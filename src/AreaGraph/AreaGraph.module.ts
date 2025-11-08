import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaGraph } from './AreaGraph.entity';
import { AreaGraphService } from './AreaGraph.service';
import { AreaGraphController } from './AreaGraph.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AreaGraph])],
  controllers: [AreaGraphController],
  providers: [AreaGraphService],
})
export class AreaGraphModule {}
