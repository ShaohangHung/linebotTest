import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LineMessagingService {
  private readonly LINE_API_ENDPOINT = 'https://api.line.me/v2/bot/message';
  private accessToken = '';
  constructor(private readonly configService: ConfigService) {
    this.accessToken = this.configService.get<string>(
      'linebot.channelAccessToken',
    );
  }

  async reply(replyToken: string, message: any): Promise<any> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    // console.log(replyToken);
    // console.log(config);

    const body = {
      replyToken,
      messages: [message],
    };

    try {
      const response = await axios.post(
        `${this.LINE_API_ENDPOINT}/reply`,
        body,
        config,
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Failed to send message to LINE: ${error.message}`);
    }
  }
}
