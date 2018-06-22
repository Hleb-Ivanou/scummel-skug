import utility from '../utility-component/index';

class Player {
  constructor(nameElId, modelElId) {
    this.name = '';
    this.hp = 100;
    this.score = 0;
    this.template = '';
    this.style = '';
    this.nameElId = nameElId;
    this.modelElId = modelElId;
  }
  setPlayerName() {
    $(`#${this.nameElId}`).text(`${this.name}`);
  }
  renderModel() {
    utility.addToCanvas(this.template);
  }
  getDamage(castedSpell) {
    this.hp -= castedSpell.damage / 2;
  }
  restoreHp() {
    this.hp = 100;
  }
}

export default Player
