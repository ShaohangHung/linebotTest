import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatGPTService {
  // private readonly GPT_API_ENDPOINT =
  //   'https://api.openai.com/v1/engines/text-davinci-003/completions';
  private readonly GPT_API_ENDPOINT = 'https://api.openai.com/v1/completions';
  private apiKey = ``;
  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('chatgpt.apiKey');
  }

  async generateResponse(prompt: string): Promise<string> {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    };

    const body = {
      model: 'text-davinci-003',
      stream: false,
      prompt: prompt,
      max_tokens: 3900,
      temperature: 0.7,
      n: 1,
    };

    try {
      const response = await axios.post(this.GPT_API_ENDPOINT, body, config);
      console.log(response.data);
      return response.data.choices[0].text;
    } catch (error) {
      console.log(error.response.data);
      return `目前有太多人問我了, 你晚點再問我吧`;
    }
  }
}
