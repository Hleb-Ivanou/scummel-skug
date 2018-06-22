import components from '../index';

class Round {
  constructor(idElement) {
    this.idElement = idElement;
    this.number = 0;
    this.template = '';
    this.style = '';
    this.playerHpBarId = 'player-hp';
    this.botHpBarId = 'bot-hp';
  }
  run() {
    this.clear();
    this.number++;
    this.renderAll();
    components.turn.run();
  }
  clear() {
    $('#game-stats').remove();
    $(`#${components.player.modelElId}`).remove();
    $(`#${components.bot.modelElId}`).remove();
  }
  renderAll() {
    this.renderRoundInfo();
    components.player.setPlayerName();
    components.bot.setBotName();
    components.player.renderModel();
    components.bot.renderModel();
  }
  setRoundNumber() {
    $(`#${this.idElement}`).text(`${this.number}`);
  }
  renderRoundInfo() {
    components.utility.addToCanvas(this.template);
    this.setRoundNumber();
    this.setHpToBar();
  }
  setHpToBar() {
    $(`#${this.playerHpBarId}`).attr('data-hp', components.player.hp);
    $(`#${this.playerHpBarId}`).animate({
      width: `${components.player.hp}%`
    }, 1500);
    $(`#${this.botHpBarId}`).attr('data-hp', components.bot.hp);
    $(`#${this.botHpBarId}`).animate({
      width: `${components.bot.hp}%`
    }, 1500);
  }
}

export default Round
