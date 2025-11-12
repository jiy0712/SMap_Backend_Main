import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  //테스트 메일 (구메일버전, 현재 사용하지 않음)
    async sendSuccessMail(userEmail: string) {
    const mailOptions = {
        from: `"SMap 관리자" <${process.env.MAIL_USER}>`,
        to: userEmail,
        subject: '[SMap] 제보해주셔서 감사합니다.',
        html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#000000; max-width:600px; margin:0 auto; padding:20px; text-align:left;">
            <p style="font-size:20px; font-weight:bold; color:#000000;">안녕하세요, ${userEmail} 님, SMap 길잡이팀입니다.</p>
            <p style="color:#000000;">보내주신 제보 메일이 정상적으로 접수되었습니다.<br />
            소중한 제보를 보내주셔서 진심으로 감사드립니다.</p>
            <p style="color:#000000;">보내주신 내용은 빠른 시일 내에 검토하여 서비스 제보 반영에 적극적으로 활용하겠습니다.</p>
            <p style="color:#000000;">감사합니다.<br />SMap 서비스 길잡이팀 드림</p>
        </div>
        `,
    };

    await this.transporter.sendMail(mailOptions);
    console.log(`메일 전송 성공 : ${userEmail}`);
    }
}
