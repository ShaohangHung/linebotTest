// 引用linebot SDK
const linebot = require('linebot');

// 用於辨識Line Channel的資訊
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken:
  process.env.CHANNEL_SECRET,
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  console.log(event.message.text);

  if (event.message.text === `hello`) {
    event.reply(`hello`);
  } else {
    event.reply(`yaya`);
  }
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
  console.log('[BOT已準備就緒]');
});
