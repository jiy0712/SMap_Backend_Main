import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ErrorMailService {
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

  async sendErrorMail(errorData: {
    location: string;
    newsUrl: string;
    email: string;
  }) {
    const { location, newsUrl, email } = errorData;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#000000; max-width:600px; margin:0 auto; padding:20px;">
        <h2 style="color:#000;">SMap 오류 제보</h2>
        <p><strong>오류 내용 : </strong> ${location || '없음'}</p>
        <p><strong>뉴스 기사 링크 : </strong> ${newsUrl ? `<a href="${newsUrl}">${newsUrl}</a>` : '없음'}</p>
        <p><strong>사용자 이메일 : </strong> ${email || '없음'}</p>
      </div>
    `;

    const mailOptions = {
      from: `"SMap 관리자" <${process.env.MAIL_USER}>`,
      to: 'purun712@gmail.com',
      subject: '[SMap] 오류 보고',
      html: htmlContent,
    };

    await this.transporter.sendMail(mailOptions);
    console.log('에러 메일 전송 완료 : purun712@gmail.com');
  }
}