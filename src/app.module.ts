import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { NewsModule } from './news/news.module';
import { MailModule } from './mail/mail.module';
import { AreaGraphModule } from './areaGraph/areaGraph.module';
import { TimeGraphModule } from './timeGraph/timeGraph.module';
import { DateGraphModule } from './dateGraph/dateGraph.module';
import { DataMailModule } from './dataMail/dataMail.module';
import { ErrorMailModule } from './errorMail/errorMail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    NewsModule,
    MailModule,
    AreaGraphModule,
    TimeGraphModule,
    DateGraphModule,
    DataMailModule,
    ErrorMailModule,
  ],
  controllers: [AppController],
})
export class AppModule {}