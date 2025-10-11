import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body('email') email: string) {
    if (!email) {
      return { message: '이메일 주소가 필요합니다.' };
    }

    await this.mailService.sendSuccessMail(email);
    return { message: '메일이 발송되었습니다.' };
  }
}
