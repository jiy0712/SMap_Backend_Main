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
      return { message: '제보자 이메일이 필요합니다.' };
    }

    await this.dataMailService.sendFormDataMail(formData);
    return { message: '제보가 정상적으로 발송되었습니다.' };
  }
}
