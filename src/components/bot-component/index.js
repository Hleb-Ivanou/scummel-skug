import html from './bot.html';
import css from './bot.css';
import Bot from './bot';
import characterSprite from './character-sprite.png';

const bot = new Bot('bot-name', 'bot');
bot.template = html;
bot.style = css;

export default bot;
