import { Controller, Post, Body } from '@nestjs/common';
import { ErrorMailService } from './errorMail.service';

@Controller('errorMail')
export class ErrorMailController {
  constructor(private readonly errorMailService: ErrorMailService) {}

  @Post('send')
  async sendError(@Body() errorData: {
    location: string;
    newsUrl: string;
    email: string;
  }) {
    await this.errorMailService.sendErrorMail(errorData);
    return { message: '에러 메일이 정상적으로 발송되었습니다.' };
  }
}
