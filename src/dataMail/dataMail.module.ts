import { Module } from '@nestjs/common';
import { DataMailService } from './datamail.service';
import { DataMailController } from './dataMail.controller';

@Module({
  providers: [DataMailService],
  controllers: [DataMailController],
})
export class DataMailModule {}
