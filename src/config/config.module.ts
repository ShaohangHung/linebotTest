import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import linebotConfig from './linebot.config';
import chatgptConfig from './chatgpt.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [linebotConfig, chatgptConfig],
      cache: true,
      isGlobal: true,
    }), // Config module
  ],
})
export class ConfigModule {}
