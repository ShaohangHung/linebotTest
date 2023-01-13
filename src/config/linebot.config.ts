import { registerAs } from '@nestjs/config';

export default registerAs(
  'linebot',
  (): Record<string, any> => ({
    channelSecret: process.env.CHANNEL_SECRET || '',
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  }),
);
