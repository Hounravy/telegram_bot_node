const { Telegraf, Markup } = require('telegraf');

const TOKEN = '6964707753:AAH64f7AB0kqvs1HmJfn8RPM8vZXBVtw-eU';
const bot = new Telegraf(TOKEN);

const mainMenu = () => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('日漫 - Japanese Comics', 'japanese'),
      Markup.button.callback('韩漫 - Korean Comics', 'korean'),
    ],
    [
      Markup.button.callback('黑白 - Black & White Comics', 'black_white'),
      Markup.button.callback('全彩 - Full Color Comics', 'full_color'),
    ],
    [Markup.button.callback('Menu & Command', 'mCommand')],
  ]);
};

bot.start((ctx) => {
  return ctx.reply('Welcome to TG comics 🙏!! Please choose a comics category below:', mainMenu());
});

bot.command('menu', (ctx) => {
  return ctx.reply('Choose an option:', {
    reply_markup: {
      keyboard: [
        [
          { text: 'Button 1', url: 'https://t.me/mymolisa_bot/bjdhgma' },
          { text: 'Button 2', url: 'https://t.me/mymolisa_bot/bjdhgma' },
        ],
        [
          { text: 'Button 1', url: 'https://t.me/mymolisa_bot/bjdhgma' },
          { text: 'Button 2', url: 'https://t.me/mymolisa_bot/bjdhgma' },
        ],
        [
          { text: 'Button 1', url: 'https://t.me/mymolisa_bot/bjdhgma' },
          { text: 'Button 2', url: 'https://t.me/mymolisa_bot/bjdhgma' },
        ],
      ],
    },
  });
});
bot.command('kefu', (ctx) => {
  return ctx.reply('Here is our services:', {
    reply_markup: {
      inline_keyboard: [[Markup.button.url('More Services', 'https://t.me/mymolisa_bot/bjdhgma')]],
    },
  });
});

bot.command('help', (ctx) => {
  return ctx.reply('Here is our contact Tg waterflow:', {
    reply_markup: {
      inline_keyboard: [[Markup.button.url('More Services', 'https://t.me/mymolisa_bot/bjdhgma')]],
    },
  });
});
bot.action('mCommand', (ctx) => {
  ctx.editMessageText(
    'You have selected Command line and Menu Button. Here are your options:\n/start: Initial page.\n/menu: menu button at below keyboard.\n/kefu: customer services.\n/help: support services.',
    {
      reply_markup: {
        inline_keyboard: [[{ text: 'Back', callback_data: 'back_to_main' }]],
      },
    }
  );
});

bot.action('japanese', (ctx) => {
  ctx.editMessageText('You have selected 日漫 - Japanese Comics. Here are your options:', {
    reply_markup: {
      inline_keyboard: [
        [Markup.button.url('View More', 'https://t.me/mymolisa_bot/bjdhgma')],
        [Markup.button.callback('Back', 'back_to_main')],
      ],
    },
  });
});

bot.action('korean', (ctx) => {
  ctx.editMessageText('You have selected 韩漫 - Korean Comics. Here are your options:', {
    reply_markup: {
      inline_keyboard: [
        [Markup.button.url('View More', 'https://t.me/mymolisa_bot/bjdhgma')],
        [Markup.button.callback('Back', 'back_to_main')],
      ],
    },
  });
});
bot.action('black_white', (ctx) => {
  ctx.editMessageText(
    'You have selected 黑白 - black_white Comics. Here are your options:<a href="https://example.com">Visit Webpage</a>',
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [Markup.button.url('View More', 'https://t.me/mymolisa_bot/bjdhgma')],
          [Markup.button.callback('Back', 'back_to_main')],
        ],
      },
    }
  );
});
bot.action('full_color', (ctx) => {
  ctx.editMessageText('You have selected 全彩 - full colors Comics. Here are your options:', {
    reply_markup: {
      inline_keyboard: [
        [Markup.button.url('View More', 'https://t.me/mymolisa_bot/bjdhgma')],
        [Markup.button.callback('Back', 'back_to_main')],
      ],
    },
  });
});
// Repeat similar handlers for 'black_white' and 'full_color'

bot.action('back_to_main', (ctx) => {
  ctx.editMessageText('Welcome back! Please choose a comics category below:', mainMenu());
});

bot.launch();
