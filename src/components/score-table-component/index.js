import html from './score-table.html';
import css from './score-table.css';
import ScoreTable from './score-table';

const scoreTable = new ScoreTable('top-ten-score');
scoreTable.template = html;
scoreTable.style = css;

export default scoreTable;
