import dialogWindowBg from './dialog-window-bg.jpg';
import html from './dialog-window.html';
import css from './dialog-window.css';
import DialogWindow from './dialog-window';

const dialogWindow = new DialogWindow('dialog');
dialogWindow.template = html;
dialogWindow.style = css;

export default dialogWindow;
