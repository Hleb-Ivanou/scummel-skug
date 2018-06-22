import html from './round.html';
import css from './round.css';
import Round from './round';

const round = new Round('round-number');
round.template = html;
round.style = css;

export default round;
