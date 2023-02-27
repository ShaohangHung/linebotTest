import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LinebotController } from './linebot/linebot.controller';
import { LinebotService } from './linebot/linebot.service';
import { LineMessagingService } from './line-messaging/line-messaging.service';
import { ChatGPTService } from './chat-gpt/chat-gpt.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, LinebotController],
  providers: [AppService, LinebotService, LineMessagingService, ChatGPTService],
})
export class AppModule {}
