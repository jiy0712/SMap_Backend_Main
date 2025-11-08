import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class DataMailService {
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

  async sendFormDataMail(formData: {
    crimeTypes: string[];
    location: string;
    date: string;
    newsUrl: string;
    email: string;
    content: string;
  }) {
    const { crimeTypes, location, date, newsUrl, email, content } = formData;

    //html 양식 추후 바꿀 예정 (테스트용)
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#000000; max-width:600px; margin:0 auto; padding:20px;">
        <h2 style="color:#000;">새 제보가 접수되었습니다.</h2>
        <p><strong>제보자 이메일:</strong> ${email || '없음'}</p>
        <p><strong>범죄 유형:</strong> ${crimeTypes.length ? crimeTypes.join(', ') : '없음'}</p>
        <p><strong>지역:</strong> ${location || '없음'}</p>
        <p><strong>날짜:</strong> ${date || '없음'}</p>
        <p><strong>뉴스 URL:</strong> ${newsUrl ? `<a href="${newsUrl}">${newsUrl}</a>` : '없음'}</p>
        <p><strong>내용:</strong> ${content || '없음'}</p>
      </div>
    `;

    const mailOptions = {
      from: `"SMap 관리자" <${process.env.MAIL_USER}>`,
      to: 'purun712@gmail.com',
      subject: '[SMap] 새로운 제보 접수',
      html: htmlContent,
    };

    await this.transporter.sendMail(mailOptions);
    console.log(`제보 메일 전송 완료: purun712@gmail.com`);
  }
}