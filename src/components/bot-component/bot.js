import utility from '../utility-component/index';

class Bot {
  constructor(nameElId, modelElId) {
    this.name = `${['Angry', 'Stupid', 'Lazy', 'Strong', 'Slow'][utility.setRandomNumber(0, 4)]} ${['Viking', 'Legioner', 'Berserk', 'Scout', 'Veteran'][utility.setRandomNumber(0, 4)]} ${['John', 'Khan', 'Mike', 'Ivan', 'Conor'][utility.setRandomNumber(0, 4)]}`;
    this.hp = 100;
    this.score = 0;
    this.template = '';
    this.style = '';
    this.nameElId = nameElId;
    this.modelElId = modelElId;
  }
  restoreHp() {
    this.hp = 100;
  }
  setBotName() {
    $(`#${this.nameElId}`).text(`${this.name}`);
  }
  renderModel() {
    utility.addToCanvas(this.template);
    const parts = [
      $('.character-bot-head'),
      $('.character-bot-body'),
      $('.character-bot-left-hand'),
      $('.character-bot-weapon'),
      $('.character-bot-right-hand'),
      $('.character-bot-left-leg'),
      $('.character-bot-right-leg')
    ];
    const posX = [20, 41, 28, -8, 62, 39, 56];
    const posY = [0, 73, 160, 189, 118, 255, 288];
    for (let i = 0; i < 7; i++) {
      let pos = `${-posX[i] - 103 * utility.setRandomNumber(0, 2)}px ${-posY[i]}px`;
      parts[i].css('background-position', pos);
    };
  }
  getDamage(castedSpell) {
    this.hp -= castedSpell.damage;
  }
}

export default Bot
