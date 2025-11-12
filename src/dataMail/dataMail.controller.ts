import { Controller, Post, Body } from '@nestjs/common';
import { DataMailService } from './datamail.service';

@Controller('dataMail')
export class DataMailController {
  constructor(private readonly dataMailService: DataMailService) {}

  @Post('send')
  async sendForm(@Body() formData: {
    crimeTypes: string[];
    location: string;
    date: string;
    newsUrl: string;
    email: string;
    content: string;
  }) {
    if (!formData.email) {
      return { message: '제보자 이메일 누락' };
    }

    await this.dataMailService.sendFormDataMail(formData);
    return { message: '제보 메일 발송 성공' };
  }
}
