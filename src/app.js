import $ from "jquery";
import './css/reset.css';
import './css/style.css';
import htmlMain from './index.html'
import gameField from './img/game-field.jpg';
import components from './components/index';
import mainSound from './bg-sound.mp3';


class App {
  constructor() {
    // this.restartBtnId = 'btn-start';
  }
  run() {
    $('body').append(htmlMain);
    $('.game-canvas').ready(() => {
      const audio = document.createElement("iframe");
      $('body').append(audio);
      audio.src = mainSound;
      $(audio).attr({
        allow: "autoplay",
        loop: "true"
      });
    });
    components.scoreTable.scoreInfo = JSON.parse(localStorage.getItem('score')) || [];
    components.utility.addToCanvas(components.dialogWindow.template);
    components.dialogWindow.show(components.login.template);
    components.login.run();
    // $('body').on('DOMNodeInserted', '#top-ten-score', () => {self.gameOver()} );
  }
//   renderRestartBtn() {
//     return `<button type="button" name="button" class="game-btn" id="btn-start">New Game</button>`;
//   }
//   gameOver() {
//     const self = this;
//     $(`#${components.dialogWindow.elId}`).append(this.renderRestartBtn());
//     $(`#${this.restartBtnId}`).click(() => self.restart());
//   }
//   restart() {
//     $('body').empty();
//     this.run();
//   }
}

const app = new App();

export default app
