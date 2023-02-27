import { registerAs } from '@nestjs/config';

export default registerAs(
  'chatgpt',
  (): Record<string, any> => ({
    apiKey: process.env.API_KEY || '',
  }),
);
