import html from './math-task.html';
import css from './math-task.css';
import MathTask from './math-task';

const mathTask = new MathTask('math-task-form');
mathTask.template = html;
mathTask.style = css;

export default mathTask;
