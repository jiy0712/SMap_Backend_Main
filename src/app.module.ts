import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { NewsModule } from './news/news.module';
import { MailModule } from './mail/mail.module';
import { AreaGraphModule } from './AreaGraph/AreaGraph.module';
import { TimeGraphModule } from './TimeGraph/TimeGraph.module';
import { DateGraphModule } from './DateGraph/DateGraph.module';
import { DataMailModule } from './dataMail/dataMail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    NewsModule,
    MailModule,
    AreaGraphModule,
    TimeGraphModule,
    DateGraphModule,
    DataMailModule,
  ],
  controllers: [AppController],
})
export class AppModule {}