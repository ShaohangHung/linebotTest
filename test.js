// 引用linebot SDK
const linebot = require('linebot');

// 用於辨識Line Channel的資訊
const bot = linebot({
  channelId: '1657817477',
  channelSecret: '6937496bdce8e97d7c0168befe610198',
  channelAccessToken:
    'MdvIEy+GnPj7oM9r20NqwRQTJyN26abTkTXO0fHGsa6ZsolFRLcFPyj3SWm8bGpBhAIl/LdLIavM9UB3418ep/q4kp4U/BkkWuk6QdtZkGWIu12LEl4pIZ2jGc2SsedS6OicxoSUWYw8q7mOIPgbNAdB04t89/1O/w1cDnyilFU=',
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
