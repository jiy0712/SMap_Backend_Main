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

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', Arial, sans-serif; line-height:1.6; color:#202020; max-width:600px; margin:0 auto; padding:20px; background:#ffffff; border-radius:8px; border:1px solid #e6e9ef; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
      <h2 style="color:#202020; margin-bottom:16px;">새 제보가 접수되었습니다.</h2>
      <p><strong>제보자 이메일 : </strong> ${email || '없음'}</p>
      <p><strong>범죄 유형 : </strong> ${crimeTypes?.length ? crimeTypes.join(', ') : '없음'}</p>
      <p><strong>지역 : </strong> ${location || '없음'}</p>
      <p><strong>날짜 : </strong> ${date || '없음'}</p>
      <p><strong>뉴스 URL : </strong> ${newsUrl ? `<a href="${newsUrl}" style="color:#1a73e8;">${newsUrl}</a>` : '없음'}</p>
      <p><strong>요약 : </strong> ${content || '없음'}</p>
      <p style="margin-top:16px; font-size:13px; color:#404040;">빠른 시일 내에 검토하여 처리 결과를 안내드리겠습니다.</p>
      <p style="margin-top:18px; font-size:14px; color:#202020;">감사합니다.<br>SMap 서비스 길잡이팀 드림</p>
    </div>
  `;

    const mailOptions = {
      from: `"SMap 관리자" <${process.env.MAIL_USER}>`,
      to: [email, 'purun712@gmail.com'],
      subject: '[SMap] 새로운 제보 접수',
      html: htmlContent,
    };

    await this.transporter.sendMail(mailOptions);
    console.log(`제보 메일 전송 완료: purun712@gmail.com`);
  }
}