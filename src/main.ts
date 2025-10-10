import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.use(
    cors({
      origin: [
        'http://localhost:3000', // 로컬용 프론트
        'http://98.88.33.105',   // 배포용 프론트
      ],
      credentials: true, 
    }),
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(3000);
  console.log(`Server running on http://localhost:3000`);
}
bootstrap();
