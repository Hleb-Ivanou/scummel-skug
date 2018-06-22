import html from './player.html';
import css from './player.css';
import Player from './player';
import characterSprite from './character-sprite.png';

const player = new Player('player-name', 'player');
player.template = html;
player.style = css;

export default player;
