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
  <!doctype html>
  <html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>제보 접수 확인 - SMap</title>
    <style>
      body,table,td {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', Arial, sans-serif;
      }
      img { border:0; display:block; line-height:100%; outline:none; text-decoration:none; }
      a { color:#202020; text-decoration:none; }

      .email-wrap {
        max-width:600px;
        margin:40px auto;
        background:#ffffff;
        border-radius:8px;
        overflow:hidden;
        border:1px solid #e6e9ef;
        color:#202020;
        box-shadow:0 4px 10px rgba(0,0,0,0.05);
      }
      .header {
        padding:22px;
        background:#202020;
        color:#ffffff;
        text-align:left;
      }
      .header .logo { font-weight:700; font-size:18px; }
      .body { padding:28px; line-height:1.6; color:#202020; }
      .greeting { font-size:16px; margin-bottom:12px; color:#202020; }
      .content { background:#f7f9fc; padding:16px; border-radius:6px; margin:16px 0; color:#202020; }
      .small { font-size:13px; color:#404040; }
      .footer { padding:18px 22px; background:#fbfdff; color:#404040; font-size:13px; text-align:center; border-top:1px solid #e6e9ef; }

      @media (max-width:420px) {
        .email-wrap { margin:8px; }
        .header,.body { padding:16px; }
      }
    </style>
  </head>
  <body style="margin:0;background:#f2f5fa;padding:24px;color:#202020">
    <div class="email-wrap" role="article" aria-label="SMap 제보 접수 확인 이메일">
      <div class="header">
        <div class="logo">SMap <span style="opacity:.95">길잡이팀</span></div>
      </div>

      <div class="body">
        <div class="greeting">안녕하세요, <strong>${email || '사용자'}</strong>님</div>

        <p>보내주신 제보 메일이 정상적으로 접수되었습니다.</p><br>
        <p>소중한 의견을 공유해 주셔서 진심으로 감사드립니다.</p>

        <div class="content">
          <p style="margin:0"><strong>접수 안내</strong></p>
          <ul style="margin:10px 0 0 18px;padding:0">
            <p style="margin:0 0 8px 0;"><strong>제보 상세 내용</strong></p>
            <p style="margin:4px 0;"><strong>범죄 유형 :</strong> ${crimeTypes?.length ? crimeTypes.join(', ') : '없음'}</p>
            <p style="margin:4px 0;"><strong>지역 :</strong> ${location || '없음'}</p>
            <p style="margin:4px 0;"><strong>날짜 :</strong> ${date || '없음'}</p>
            <p style="margin:4px 0;"><strong>뉴스 URL :</strong> ${newsUrl ? `<a href="${newsUrl}" target="_blank" style="color:#0056b3;">${newsUrl}</a>` : '없음'}</p>
            <p style="margin:4px 0;"><strong>요약 :</strong> ${content || '없음'}</p>
          </ul>
        </div>

        <p class="small" style="margin-top:18px;">빠른 시일 내에 검토하여 반영 여부 및 처리 결과를 안내드리겠습니다.</p>

        <p style="margin-top:18px;font-size:14px;color:#202020">감사합니다.<br>SMap 서비스 길잡이팀 드림</p>
      </div>

      <div class="footer">
        이 메일은 발신 전용입니다. 문의사항은 <a href="mailto:purun712@gmail.com">purun712@gmail.com</a> 로 연락 주세요.<br>
        © 2025 SMap. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;


    const mailOptions = {
      from: `"SMap 관리자" <${process.env.MAIL_USER}>`,
      to: [email, 'purun712@gmail.com'],
      subject: '[SMap] 새로운 제보 접수',
      html: htmlContent,
    };

    await this.transporter.sendMail(mailOptions);
    console.log(`제보 메일 전송 완료 : purun712@gmail.com`);
  }
}