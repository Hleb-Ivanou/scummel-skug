import html from './login.html';
import css from './login.css';
import Login from './login';

const login = new Login('login-form');
login.template = html;
login.style = css;

export default login;
