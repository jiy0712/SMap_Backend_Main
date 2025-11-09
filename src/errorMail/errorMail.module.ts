import { Module } from '@nestjs/common';
import { ErrorMailService } from './errorMail.service';
import { ErrorMailController } from './errorMail.controller';

@Module({
  providers: [ErrorMailService],
  controllers: [ErrorMailController],
})
export class ErrorMailModule {}
