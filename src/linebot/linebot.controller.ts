import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ChatGPTService } from 'src/chat-gpt/chat-gpt.service';
import { LineMessagingService } from '../line-messaging/line-messaging.service';

@Controller('linebot')
export class LinebotController {
  constructor(
    private readonly lineMessagingService: LineMessagingService,
    private readonly chatGPTService: ChatGPTService,
  ) {}

  @Post('webhook')
  async webhook(@Body() body: any): Promise<any> {
    const events = body.events;
    const replyToken = events[0].replyToken;
    const message = events[0].message.text;
    const userId = events[0].source.userId;

    console.log(`received msg: ${message}`);

    let response = `你沒有問我吧`;
    if (message.startsWith(`chatGPT`)) {
      // Call ChatGPT to generate response
      const splitedMsg = message.replace(`chatGPT`, ``).trim();
      console.log(`splitedMsg: ${splitedMsg}`);
      response = await this.chatGPTService.generateResponse(splitedMsg);

      // Send response back to LINE user
      try {
        await this.lineMessagingService.reply(replyToken, {
          type: `text`,
          text: response,
        });
      } catch (error) {
        console.log(error);
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
