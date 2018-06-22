import html from './spell.html';
import css from './spell.css';
import Spell from './spell';

const spell = new Spell();
spell.template = html;
spell.style = css;

export default spell;
