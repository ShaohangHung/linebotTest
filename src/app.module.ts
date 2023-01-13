import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LineMessagingModule } from '@nestjs-line/messaging';
import { LinebotController } from './linebot/linebot.controller';
import { LinebotService } from './linebot/linebot.service';

@Module({
  imports: [
    ConfigModule,
    LineMessagingModule.forRoot({
      channelSecret: 'secret',
      channelAccessToken: 'access_token',
    }),
  ],
  controllers: [AppController, LinebotController],
  providers: [AppService, LinebotService],
})
export class AppModule {}
