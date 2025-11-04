import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return { message: '배포 정상 성공' };
  }

  @Get('healthz')
  healthCheck() {
    return { status: '배포 정상 성공' };
  }
}