import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cors from 'cors'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.use(
    cors({
      origin: [
        'http://localhost:3000', // 로컬 프론트
        'http://98.88.33.105',   // 배포 프론트
        'https://port-0-smap-backend-main-mhkpzrkrde061e33.sel3.cloudtype.app',
        'https://s-map-front.vercel.app',
        'https://s-map-front-git-main-lees-projects-24c32651.vercel.app',
        'https://s-map-front-1ani35zs5-lees-projects-24c32651.vercel.app',
        'https://s-map-front.vercel.app/',
      ],
      credentials: true,
    }),
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(process.env.PORT || 3000);
  console.log(`배포 :  ${process.env.PORT || 3000}`);
}

bootstrap();