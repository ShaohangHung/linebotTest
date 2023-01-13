import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import linebotConfig from './linebot.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [linebotConfig],
      cache: true,
      isGlobal: true,
    }), // Config module
  ],
})
export class ConfigModule {}
